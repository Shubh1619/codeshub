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

const WEB_APP_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL;
const TOKEN = process.env.NEXT_PUBLIC_ENQUIRY_TOKEN;

export async function submitEnquiry(form: EnquiryForm): Promise<void> {
  if (!WEB_APP_URL || !TOKEN) {
    throw new Error("Enquiry delivery is not configured yet.");
  }

  const res = await fetch(WEB_APP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({ token: TOKEN, form }),
    redirect: "follow",
  });

  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.ok) {
    throw new Error(data?.error || "Failed to send enquiry");
  }
}