"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { submitLeadCaptureAction } from "@/app/actions/forms";
import { PendingSubmitButton } from "@/components/PendingSubmitButton";
import { initialFormSubmissionState } from "@/lib/form-submission";
import { fireConversion, CONVERSION_LABELS } from "@/lib/gtag";

export function LeadCaptureForm() {
  const [state, formAction] = useActionState(
    submitLeadCaptureAction,
    initialFormSubmissionState,
  );
  const firstNameError = state.fieldErrors?.firstName?.[0];
  const emailError = state.fieldErrors?.email?.[0];

  useEffect(() => {
    if (state.status === "success") {
      fireConversion(CONVERSION_LABELS.lead, { value: 5.00, currency: 'USD' });
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="text-center py-4" role="status" aria-live="polite">
        <div className="text-5xl mb-4">🎉</div>
        <p style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "1.5rem", fontWeight: 700, color: "#1E293B", marginBottom: "0.5rem" }}>
          You&apos;re on the list
        </p>
        <p style={{ color: "#64748B", fontSize: "0.9375rem" }}>
          {state.message}
        </p>
        <div className="mt-5">
          <Link href="/subscribe" className="btn-primary">
            Compare Plans
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      id="lead-capture-form"
      data-form="lead-optin"
      action={formAction}
      className="flex w-full max-w-xl flex-col gap-3 mx-auto sm:flex-row sm:items-center"
      noValidate
    >
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="lead-website">Website</label>
        <input id="lead-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-1 sm:w-[180px] sm:flex-none">
        <label htmlFor="lead-first-name" className="sr-only">
          First name
        </label>
        <input
          id="lead-first-name"
          type="text"
          name="first_name"
          className="focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 focus-visible:border-orange-500"
          aria-describedby={firstNameError ? "lead-first-name-error" : undefined}
          aria-invalid={Boolean(firstNameError)}
          autoComplete="given-name"
          placeholder="First name"
          style={{
            width: "100%",
            height: "52px",
            padding: "12px 18px",
            borderRadius: "999px",
            border: `2px solid ${firstNameError ? "#DC2626" : "#E2E8F0"}`,
            fontSize: "0.9375rem",
            lineHeight: 1.2,
            fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
            outline: "none",
            color: "#1E293B",
            backgroundColor: "#fff",
          }}
        />
        {firstNameError ? (
          <p id="lead-first-name-error" className="text-left text-xs" style={{ color: "#FECACA" }}>
            {firstNameError}
          </p>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <label htmlFor="lead-email" className="sr-only">
          Email address
        </label>
        <input
          id="lead-email"
          type="email"
          name="email"
          required
          className="focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 focus-visible:border-orange-500"
          aria-describedby={emailError ? "lead-email-error" : undefined}
          aria-invalid={Boolean(emailError)}
          autoComplete="email"
          placeholder="Your email address"
          style={{
            width: "100%",
            height: "52px",
            padding: "12px 18px",
            borderRadius: "999px",
            border: `2px solid ${emailError ? "#DC2626" : "#E2E8F0"}`,
            fontSize: "0.9375rem",
            lineHeight: 1.2,
            fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
            outline: "none",
            color: "#1E293B",
            backgroundColor: "#fff",
          }}
        />
        {emailError ? (
          <p id="lead-email-error" className="text-left text-xs" style={{ color: "#FECACA" }}>
            {emailError}
          </p>
        ) : null}
      </div>

      <PendingSubmitButton
        className="w-full sm:w-auto"
        label="Join the List"
        pendingLabel="Saving..."
        style={{
          height: "52px",
          padding: "0 28px",
          borderRadius: "999px",
          backgroundColor: "#C2410C",
          color: "#fff",
          fontWeight: 700,
          fontSize: "0.9375rem",
          fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
          border: "none",
          boxShadow: "0 4px 14px rgba(194,65,12,0.45)",
          whiteSpace: "nowrap",
        }}
      />

      {state.status === "error" && state.message ? (
        <p
          className="w-full text-center text-sm sm:basis-full"
          style={{ color: "#FECACA" }}
          role="alert"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
