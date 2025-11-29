import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs"; // REQUIRED for nodemailer

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, countryCode, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: "sales@ztake.in",
        pass: process.env.ZOHO_PASSWORD!,
      },
    });

    await transporter.sendMail({
      from: "sales@ztake.in",
      to: "sales@ztake.in",
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode || "+91"} ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
