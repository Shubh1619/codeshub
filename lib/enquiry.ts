export interface EnquiryForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  position: string;
  budget: string;
  timeline: string;
  message: string;
}

export async function submitEnquiry(form: EnquiryForm): Promise<void> {
  const res = await fetch("/api/enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.ok) {
    throw new Error(data?.error || "Failed to send enquiry");
  }
}