# Email Configuration Guide

This document explains how to set up email notifications for contact form submissions.

## Overview

When users submit the contact form, the application will:
1. Send a notification email to configured recipients (e.g., s.umashankar@live.com)
2. Send a confirmation email to the user

## Email Recipients Configuration

### Adding/Removing Recipients

Edit `server/config.ts` to manage the list of email recipients:

```typescript
export const EMAIL_CONFIG = {
  recipients: [
    "s.umashankar@live.com",
    "other.email@example.com",      // Add more emails
    "another.email@example.com",
  ],
  // ... rest of config
};
```

Simply add email addresses to the `recipients` array. Each contact form submission will be sent to all listed email addresses.

## SMTP Configuration

The application uses SMTP to send emails. You need to provide SMTP credentials via environment variables.

### Setting Up with Gmail (Recommended)

1. **Enable 2-Factor Authentication:**
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Google will generate a 16-character password

3. **Add Environment Variables:**

   For local development (`.env` file):
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-char-app-password
   EMAIL_FROM=noreply@sethuproperties.com
   ```

   For Vercel (Environment Variables):
   - Go to your Vercel project settings → Environment Variables
   - Add the same variables as above

### Using Other SMTP Providers

For other email providers, update the SMTP configuration in `.env`:

**Example for SendGrid:**
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=SG.your-sendgrid-api-key
```

**Example for Outlook:**
```
SMTP_HOST=smtp.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

## Email Templates

### Notification Email (to recipients)
Contains:
- Sender's name, email, phone
- Property type (if provided)
- Service interest
- Full message
- Submission timestamp

### Confirmation Email (to user)
Contains:
- Thank you message
- Confirmation of received details
- Expected response time (24 hours)

## Testing Email Configuration

### Local Testing
1. Set up SMTP credentials in `.env`
2. Run `npm run dev`
3. Submit a test form at http://localhost:5000/contact
4. Check your email inbox (or spam folder)

### Vercel Testing
1. Add SMTP environment variables to Vercel project settings
2. Deploy to Vercel
3. Submit a test form
4. Check email in 2-3 minutes

## Troubleshooting

### Emails not being sent?

1. **Check SMTP credentials:**
   - Verify SMTP_USER and SMTP_PASSWORD are correct
   - For Gmail, ensure you're using an App Password, not your regular password

2. **Check email list:**
   - Verify at least one email is in `EMAIL_CONFIG.recipients`
   - Ensure emails are valid format

3. **Check Vercel logs:**
   ```bash
   vercel logs
   ```
   Look for `[Email]` prefixed messages

4. **Enable debug logging:**
   - Check browser console for any form submission errors
   - Check server logs for email sending attempts

### Gmail App Password Issues?

- Make sure 2FA is enabled first
- Try generating a new App Password
- Some Gmail accounts may have special restrictions

## Environment Variables Reference

| Variable | Example | Required | Notes |
|----------|---------|----------|-------|
| `SMTP_HOST` | smtp.gmail.com | Yes | SMTP server hostname |
| `SMTP_PORT` | 587 | Yes | SMTP server port (usually 587 or 465) |
| `SMTP_SECURE` | false | Yes | Use TLS (false for 587, true for 465) |
| `SMTP_USER` | user@gmail.com | Yes | SMTP username |
| `SMTP_PASSWORD` | password | Yes | SMTP password or app password |
| `EMAIL_FROM` | noreply@sethuproperties.com | No | Sender email address |

## Production Deployment

When deploying to Vercel:

1. Go to your Vercel project → Settings → Environment Variables
2. Add all SMTP configuration variables
3. Set them for Production environment
4. Redeploy your application
5. Test the contact form in production

## Support

If you encounter issues:
1. Check the error logs in Vercel dashboard
2. Verify SMTP credentials are correct
3. Ensure email addresses in `recipients` list are valid
4. Check that 2FA and App Passwords are properly set up (for Gmail)
