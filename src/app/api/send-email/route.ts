// /src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  const { to, subject, html } = await req.json();

  if (!to || !subject || !html) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const response = await sendEmail({ to, subject, html });
    return NextResponse.json({ success: true, response });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
