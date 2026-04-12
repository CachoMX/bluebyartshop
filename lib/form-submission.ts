export type FormSubmissionState = {
  fieldErrors?: Partial<Record<string, string[]>>;
  message?: string;
  status: "idle" | "success" | "error";
};

export const initialFormSubmissionState: FormSubmissionState = {
  status: "idle",
};
