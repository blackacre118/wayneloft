export const roles = [
  { value: "city", label: "City" },
  { value: "lender", label: "Lender" },
  { value: "operator", label: "Hotel operator" },
  { value: "penthouse", label: "Penthouse" },
  { value: "residence", label: "Residences" },
  { value: "events", label: "Events" },
  { value: "press", label: "Press" },
  { value: "other", label: "Other" },
] as const;

export type Role = (typeof roles)[number]["value"];

export const inquiryCopy = {
  roleLabel: "Who are you?",
  success: {
    title: "Received.",
    body: "Thank you. Someone from the WAYNE team will be in touch.",
  },
  error: "Something went wrong. Please try again, or write to us directly.",
  consent: "By submitting, you agree to our privacy policy.",
} as const;
