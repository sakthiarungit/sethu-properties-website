/**
 * Email Configuration for Gmail SMTP
 *
 * List of email recipients for contact form submissions.
 * Add or remove emails from this list to manage who receives contact notifications.
 *
 * To configure Gmail SMTP:
 * 1. Enable 2-Factor Authentication on your Google Account
 * 2. Generate an App Password at https://myaccount.google.com/apppasswords
 * 3. Add these environment variables to Vercel:
 *    - SMTP_HOST=smtp.gmail.com
 *    - SMTP_PORT=587
 *    - SMTP_USER=your-email@gmail.com
 *    - SMTP_PASSWORD=your-16-char-app-password
 *    - EMAIL_FROM=your-email@gmail.com
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
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  },
};
