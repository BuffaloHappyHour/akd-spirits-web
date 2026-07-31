import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // Shell endpoint: wire this up to an email provider (e.g. Resend) or a
  // CRM/inbox before launch. For now it just confirms receipt.
  console.log("New AKD Spirits contact submission:", body);

  return NextResponse.json({ ok: true });
}
