export const contactSubjects = [
  "General Question",
  "Subscription Support",
  "Order / Shipping Issue",
  "Wholesale Inquiry",
  "Custom Order",
  "Partnership",
  "Press / Media",
  "Other",
] as const;

export type ContactSubject = (typeof contactSubjects)[number];
