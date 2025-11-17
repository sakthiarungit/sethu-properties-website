import nodemailer from "nodemailer";
import { type InsertContactInquiry } from "@shared/schema";
import { EMAIL_CONFIG } from "./config";

// Create transporter
const transporter = nodemailer.createTransport(EMAIL_CONFIG.smtp);

/**
 * Send contact form submission emails
 */
export async function sendContactNotificationEmail(
  inquiry: InsertContactInquiry & { id: string; createdAt: Date }
): Promise<void> {
  // Skip if no recipients configured
  if (!EMAIL_CONFIG.recipients.length) {
    console.log("[Email] No recipients configured, skipping email");
    return;
  }

  // Skip if SMTP credentials not configured
  if (!EMAIL_CONFIG.smtp.auth.user || !EMAIL_CONFIG.smtp.auth.pass) {
    console.log("[Email] SMTP credentials not configured, skipping email");
    return;
  }

  try {
    const htmlContent = `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(inquiry.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(inquiry.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(inquiry.phone)}</p>
      <p><strong>Property Type:</strong> ${inquiry.propertyType ? escapeHtml(inquiry.propertyType) : "Not specified"}</p>
      <p><strong>Service Interest:</strong> ${escapeHtml(inquiry.serviceInterest)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(inquiry.message).replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Received on: ${inquiry.createdAt.toLocaleString()}</small></p>
    `;

    const textContent = `
New Contact Inquiry

Name: ${inquiry.name}
Email: ${inquiry.email}
Phone: ${inquiry.phone}
Property Type: ${inquiry.propertyType || "Not specified"}
Service Interest: ${inquiry.serviceInterest}

Message:
${inquiry.message}

---
Received on: ${inquiry.createdAt.toLocaleString()}
    `.trim();

    await transporter.sendMail({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.recipients.join(", "),
      subject: `New Contact Inquiry from ${inquiry.name}`,
      text: textContent,
      html: htmlContent,
      replyTo: inquiry.email,
    });

    console.log(`[Email] Contact notification sent to ${EMAIL_CONFIG.recipients.join(", ")}`);
  } catch (error) {
    console.error("[Email] Failed to send contact notification:", error);
    // Don't throw - we don't want email failures to break the form submission
  }
}

/**
 * Send confirmation email to the user
 */
export async function sendContactConfirmationEmail(inquiry: InsertContactInquiry): Promise<void> {
  // Skip if SMTP credentials not configured
  if (!EMAIL_CONFIG.smtp.auth.user || !EMAIL_CONFIG.smtp.auth.pass) {
    console.log("[Email] SMTP credentials not configured, skipping confirmation email");
    return;
  }

  try {
    const htmlContent = `
      <h2>Thank You for Contacting Sethu Properties</h2>
      <p>Dear ${escapeHtml(inquiry.name)},</p>
      <p>We have received your inquiry and appreciate your interest in our services. Our team will review your message and get back to you within 24 hours.</p>
      <p><strong>Your Details:</strong></p>
      <ul>
        <li><strong>Email:</strong> ${escapeHtml(inquiry.email)}</li>
        <li><strong>Phone:</strong> ${escapeHtml(inquiry.phone)}</li>
        <li><strong>Service Interest:</strong> ${escapeHtml(inquiry.serviceInterest)}</li>
      </ul>
      <p>Best regards,<br>Sethu Properties Team</p>
    `;

    const textContent = `
Thank You for Contacting Sethu Properties

Dear ${inquiry.name},

We have received your inquiry and appreciate your interest in our services.
Our team will review your message and get back to you within 24 hours.

Your Details:
- Email: ${inquiry.email}
- Phone: ${inquiry.phone}
- Service Interest: ${inquiry.serviceInterest}

Best regards,
Sethu Properties Team
    `.trim();

    await transporter.sendMail({
      from: EMAIL_CONFIG.from,
      to: inquiry.email,
      subject: "We Received Your Inquiry - Sethu Properties",
      text: textContent,
      html: htmlContent,
    });

    console.log(`[Email] Confirmation email sent to ${inquiry.email}`);
  } catch (error) {
    console.error("[Email] Failed to send confirmation email:", error);
    // Don't throw - we don't want email failures to break the form submission
  }
}

/**
 * Escape HTML special characters to prevent email injection
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
