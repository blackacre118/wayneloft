import { NextResponse } from "next/server";
import { Resend } from "resend";
import { roles } from "@/content/inquiry";

const MAX = { name: 120, email: 200, organization: 200, message: 4000 };

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot filled → pretend success, send nothing.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const organization = clean(body.organization, MAX.organization);
  const message = clean(body.message, MAX.message);
  const role = roles.find((r) => r.value === body.role);

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !role) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields" }, { status: 422 });
  }

  const subject = `WAYNE inquiry · ${role.label} · ${name}`;
  const text = [
    `Who: ${role.label}`,
    `Name: ${name}`,
    `Email: ${email}`,
    organization && `Organization: ${organization}`,
    "",
    message || "(no message)",
  ]
    .filter((l) => l !== "")
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO;
  if (!apiKey || !to) {
    console.log("[inquire] RESEND_API_KEY / INQUIRY_TO not set — inquiry logged only:\n" + subject + "\n" + text);
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.INQUIRY_FROM ?? "WAYNE <inquiries@waynelofts.com>",
      to: to.split(",").map((s) => s.trim()),
      replyTo: email,
      subject,
      text,
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquire] send failed", err);
    return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
  }
}
