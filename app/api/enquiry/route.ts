import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const webAppUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL;
  const token = process.env.ENQUIRY_TOKEN;
  if (!webAppUrl || !token) {
    return NextResponse.json(
      { ok: false, error: "Enquiry delivery is not configured." },
      { status: 500 }
    );
  }

  let form: Record<string, string>;
  try {
    form = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const res = await fetch(webAppUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ token, form }),
    redirect: "follow",
  });

  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.ok) {
    return NextResponse.json(
      { ok: false, error: data?.error || "Failed to send enquiry." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}