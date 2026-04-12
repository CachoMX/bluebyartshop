"use server";

import { z } from "zod";
import {
  createContactSubmission,
  createLeadSubmission,
} from "@/lib/storefront";
import { contactSubjects } from "@/lib/contact-subjects";
import type { FormSubmissionState } from "@/lib/form-submission";
import { isSupabaseAdminConfigured } from "@/lib/supabase/config";

const requiredText = (fieldName: string, maxLength: number) =>
  z
    .string()
    .trim()
    .min(1, `${fieldName} is required.`)
    .max(maxLength, `${fieldName} must be ${maxLength} characters or fewer.`);

const optionalText = (maxLength: number) =>
  z.preprocess((value) => {
    if (typeof value !== "string") {
      return undefined;
    }

    const trimmedValue = value.trim();
    return trimmedValue.length > 0 ? trimmedValue : undefined;
  }, z.string().max(maxLength, `Must be ${maxLength} characters or fewer.`).optional());

const contactSubjectSchema = z
  .string()
  .trim()
  .refine(
    (value) =>
      contactSubjects.includes((value || "") as (typeof contactSubjects)[number]),
    "Select a valid subject.",
  );

const readTrimmedFormValue = (value: FormDataEntryValue | null) => {
  return typeof value === "string" ? value.trim() : "";
};

const isCooldownViolationError = (error: unknown) => {
  if (!error || typeof error !== "object") {
    return false;
  }

  return "code" in error && (error as { code?: string }).code === "23505";
};

const leadSubmissionSchema = z.object({
  email: requiredText("Email address", 160).email("Enter a valid email address."),
  firstName: optionalText(80),
});

const contactSubmissionSchema = z.object({
  email: requiredText("Email address", 160).email("Enter a valid email address."),
  message: requiredText("Message", 4000),
  name: requiredText("Name", 120),
  subject: contactSubjectSchema,
});

const backendUnavailableState = {
  status: "error" as const,
  message:
    "This form is not connected yet in the current environment. Please try again later or email hello@bluebyartshop.com.",
};

export const submitLeadCaptureAction = async (
  _previousState: FormSubmissionState,
  formData: FormData,
): Promise<FormSubmissionState> => {
  if (readTrimmedFormValue(formData.get("website"))) {
    return {
      status: "success",
      message: "Thanks. We saved your request.",
    };
  }

  const parsedInput = leadSubmissionSchema.safeParse({
    email: formData.get("email"),
    firstName: formData.get("first_name"),
  });

  if (!parsedInput.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors: parsedInput.error.flatten().fieldErrors,
    };
  }

  if (!isSupabaseAdminConfigured()) {
    return backendUnavailableState;
  }

  const { email, firstName } = parsedInput.data;
  try {
    await createLeadSubmission({
      email,
      first_name: firstName ?? null,
      interest: "welcome-offer",
      message: "Homepage welcome offer request.",
      source: "homepage",
    });

    return {
      status: "success",
      message: `Thanks${firstName ? `, ${firstName}` : ""}. We saved your request and will follow up at ${email}.`,
    };
  } catch (error) {
    if (isCooldownViolationError(error)) {
      return {
        status: "error",
        message: "Please wait a minute before submitting this form again.",
      };
    }

    console.error(error);
    return {
      status: "error",
      message:
        "We could not save your request just now. Please try again or email hello@bluebyartshop.com.",
    };
  }
};

export const submitContactFormAction = async (
  _previousState: FormSubmissionState,
  formData: FormData,
): Promise<FormSubmissionState> => {
  if (readTrimmedFormValue(formData.get("website"))) {
    return {
      status: "success",
      message: "Thanks. We received your note.",
    };
  }

  const parsedInput = contactSubmissionSchema.safeParse({
    email: formData.get("email"),
    message: formData.get("message"),
    name: formData.get("name"),
    subject: formData.get("subject"),
  });

  if (!parsedInput.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and send your message again.",
      fieldErrors: parsedInput.error.flatten().fieldErrors,
    };
  }

  if (!isSupabaseAdminConfigured()) {
    return backendUnavailableState;
  }

  const { email, message, name, subject } = parsedInput.data;
  try {
    await createContactSubmission({
      email,
      inquiry_type: subject,
      message,
      name,
      order_interest:
        subject === "Wholesale Inquiry" || subject === "Custom Order"
          ? subject
          : null,
    });

    return {
      status: "success",
      message: `Thanks, ${name}. We received your message and will reply at ${email} as soon as we can.`,
    };
  } catch (error) {
    if (isCooldownViolationError(error)) {
      return {
        status: "error",
        message: "Please wait a minute before sending another message.",
      };
    }

    console.error(error);
    return {
      status: "error",
      message:
        "We could not send your message just now. Please try again or email hello@bluebyartshop.com.",
    };
  }
};
