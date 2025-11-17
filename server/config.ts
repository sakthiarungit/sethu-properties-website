/**
 * Email Configuration
 *
 * List of email recipients for contact form submissions.
 * Add or remove emails from this list to manage who receives contact notifications.
 */

export const EMAIL_CONFIG = {
  // List of recipient emails for contact form submissions
  recipients: [
    "s.umashankar@live.com",
    // Add more emails below as needed:
    // "other.email@example.com",
    // "another.email@example.com",
  ],

  // Email sender configuration
  from: process.env.EMAIL_FROM || "noreply@sethuproperties.com",

  // SMTP configuration (uses environment variables)
  smtp: {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  },
};
