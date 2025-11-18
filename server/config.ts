/**
 * Email Configuration for Gmail SMTP
 *
 * All configuration is managed via environment variables for easy updates without redeploying.
 *
 * To configure Gmail SMTP, set these environment variables in Vercel:
 * - EMAIL_RECIPIENTS: Comma-separated list of recipient emails (e.g., "email1@example.com,email2@example.com")
 * - SMTP_HOST: Gmail SMTP host (smtp.gmail.com)
 * - SMTP_PORT: Gmail SMTP port (587)
 * - SMTP_USER: Your Gmail address
 * - SMTP_PASSWORD: Your 16-character App Password
 * - EMAIL_FROM: Sender email address (optional)
 *
 * See GMAIL_SETUP.md for detailed configuration instructions.
 */

/**
 * Parse EMAIL_RECIPIENTS environment variable into array
 * Expected format: "email1@example.com,email2@example.com"
 */
function parseRecipients(recipientsEnv: string | undefined): string[] {
  if (!recipientsEnv) {
    return [];
  }
  return recipientsEnv
    .split(",")
    .map((email) => email.trim())
    .filter((email) => email.length > 0);
}

export const EMAIL_CONFIG = {
  // List of recipient emails for contact form submissions (from environment variable)
  recipients: parseRecipients(process.env.EMAIL_RECIPIENTS),

  // Email sender configuration
  from: process.env.EMAIL_FROM || "noreply@sethuproperties.com",

  // SMTP configuration (all from environment variables)
  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  },
};
