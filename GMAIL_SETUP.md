# Gmail SMTP Setup Guide for Sethu Properties

This guide explains how to configure Gmail SMTP for sending contact form notification emails.

## Overview

When users submit the contact form, the application will:
1. Send a **notification email** to configured recipients (e.g., s.umashankar@live.com)
2. Send a **confirmation email** to the user

## Email Recipients Configuration

### Managing Recipients via Environment Variables

The recipient emails are configured via the `EMAIL_RECIPIENTS` environment variable in Vercel. This means you can easily add or remove recipients without changing code.

### Adding/Removing Recipients

1. Go to **Vercel Dashboard**
2. Select your **Sethu Properties** project
3. Go to **Settings** → **Environment Variables**
4. Update the `EMAIL_RECIPIENTS` variable with comma-separated email addresses:

```
EMAIL_RECIPIENTS=s.umashankar@live.com,other.email@example.com,another.email@example.com
```

### Examples

**Single recipient:**
```
EMAIL_RECIPIENTS=s.umashankar@live.com
```

**Multiple recipients:**
```
EMAIL_RECIPIENTS=s.umashankar@live.com,john@example.com,support@example.com
```

**No spaces needed between emails** - they will be automatically trimmed.

Each contact form submission will be sent to all listed email addresses.

## Gmail SMTP Setup (4 Steps)

### Step 1: Enable 2-Factor Authentication

1. Go to **Google Account**: https://myaccount.google.com/
2. Click **Security** (left sidebar)
3. Scroll down to **"How you sign in to Google"**
4. Click **2-Step Verification**
5. Click **Get Started**
6. Enter your password
7. Choose how to receive verification codes (phone number recommended)
8. Complete the verification process

### Step 2: Generate App Password

1. Go to **Google Account**: https://myaccount.google.com/
2. Click **Security** (left sidebar)
3. Scroll down to **"How you sign in to Google"**
4. Click **App passwords** (appears after 2FA is enabled)
5. Select:
   - **App**: Mail
   - **Device**: Windows Computer (or your device)
6. Click **Generate**
7. Google will show a **16-character password** like: `abcd efgh ijkl mnop`
8. **Copy this password** (remove spaces when using it)

### Step 3: Get Gmail SMTP Credentials

```
SMTP_HOST: smtp.gmail.com
SMTP_PORT: 587
SMTP_SECURE: false
SMTP_USER: your-email@gmail.com
SMTP_PASSWORD: abcdefghijklmnop (16-char from Step 2, no spaces)
EMAIL_FROM: your-email@gmail.com
```

### Step 4: Add to Vercel Environment Variables

1. Go to **Vercel Dashboard**
2. Select your **Sethu Properties** project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```
EMAIL_RECIPIENTS=s.umashankar@live.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
EMAIL_FROM=your-email@gmail.com
```

**EMAIL_RECIPIENTS** is the most important - add all recipient email addresses here (comma-separated if multiple).

5. Make sure variables are set for **Production**
6. Click **Save**
7. **Redeploy** your application for changes to take effect

## Testing Email Configuration

### Local Testing

1. Create a `.env` file in your project root:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
EMAIL_FROM=your-email@gmail.com
```

2. Run development server: `npm run dev`
3. Submit a test form at http://localhost:5000/contact
4. Check your email inbox for the notification

### Production Testing (Vercel)

1. Submit a test form on your deployed site
2. Check your email inbox for:
   - **Notification email** (to recipients list)
   - **Confirmation email** (to user's email)
3. If not received:
   - Check spam/junk folder
   - Wait 2-3 minutes (Gmail can be slow)
   - Check Vercel logs: `vercel logs`

## Troubleshooting

### ❌ "Authentication failed" or "Invalid credentials"

**Solution:**
- Verify you're using the **16-character App Password** (not your Gmail password)
- Copy it exactly: `abcdefghijklmnop` (no spaces)
- Make sure 2-Factor Authentication is enabled first
- Generate a new App Password if unsure

### ❌ "Less secure app access" error

**Solution:**
- You're using your regular Gmail password instead of App Password
- App Passwords automatically work with 2FA
- Follow Step 2 above to generate an App Password

### ❌ Email sent but not received

**Solution:**
- Check spam/junk folder (common for automated emails)
- Wait 2-3 minutes (Gmail delivery can be slow)
- Verify recipient email is correct in `server/config.ts`
- Check Vercel logs for errors: `vercel logs`

### ❌ "SMTP connection timeout"

**Solution:**
- Verify SMTP_HOST and SMTP_PORT are correct
- Check your network/firewall isn't blocking port 587
- Try waiting a few minutes and resubmitting form

### ❌ Need to regenerate App Password

**Solution:**
1. Go to https://myaccount.google.com/apppasswords
2. Select Mail + device again
3. Google will generate a new 16-character password
4. Update Vercel environment variables with the new password
5. Redeploy your application

## Gmail SMTP Limitations

⚠️ **Important for Production:**

Gmail SMTP has rate limits:
- **Daily send limit**: 500 emails per day
- **Per-minute limit**: 10 emails per second

**For higher volume:**
- Consider using SendGrid, Mailgun, or AWS SES
- Gmail SMTP is suitable for low-volume (< 500 emails/day) projects

## Email Content Examples

### Notification Email (sent to recipients)

**To:** s.umashankar@live.com
**Subject:** New Contact Inquiry from John Doe

**Content:**
```
New Contact Inquiry

Name: John Doe
Email: john@example.com
Phone: +1-234-567-8900
Property Type: Residential
Service Interest: Property Management
Message: I'm interested in your property management services...

---
Received on: 11/17/2025, 3:45 PM
```

### Confirmation Email (sent to user)

**To:** john@example.com
**Subject:** We Received Your Inquiry - Sethu Properties

**Content:**
```
Thank You for Contacting Sethu Properties

Dear John Doe,

We have received your inquiry and appreciate your interest in our services.
Our team will review your message and get back to you within 24 hours.

Your Details:
- Email: john@example.com
- Phone: +1-234-567-8900
- Service Interest: Property Management

Best regards,
Sethu Properties Team
```

## Environment Variables Reference

| Variable | Example | Required | Notes |
|----------|---------|----------|-------|
| `SMTP_HOST` | smtp.gmail.com | Yes | Gmail SMTP server |
| `SMTP_PORT` | 587 | Yes | Gmail SMTP port |
| `SMTP_SECURE` | false | Yes | Don't use SSL for port 587 |
| `SMTP_USER` | user@gmail.com | Yes | Your Gmail address |
| `SMTP_PASSWORD` | abcdefghijklmnop | Yes | 16-char App Password |
| `EMAIL_FROM` | your-email@gmail.com | No | Sender display address |

## Quick Checklist

- [ ] 2-Factor Authentication enabled on Google Account
- [ ] App Password generated (16 characters)
- [ ] SMTP_HOST = smtp.gmail.com
- [ ] SMTP_PORT = 587
- [ ] SMTP_SECURE = false
- [ ] SMTP_USER = your-email@gmail.com
- [ ] SMTP_PASSWORD = 16-char app password (no spaces)
- [ ] Email recipients added to `server/config.ts`
- [ ] Environment variables added to Vercel
- [ ] Application redeployed
- [ ] Test form submitted and emails received

## Useful Links

- **Google Account Security**: https://myaccount.google.com/security
- **App Passwords**: https://myaccount.google.com/apppasswords
- **Vercel Environment Variables**: https://vercel.com/docs/concepts/projects/environment-variables
- **Gmail SMTP Settings**: https://support.google.com/mail/answer/7126229

## Support

If you encounter issues:
1. Check the error logs in Vercel dashboard: `vercel logs`
2. Verify 2FA is enabled on your Google Account
3. Verify App Password is correct (16 characters, no spaces)
4. Verify recipient email addresses in `server/config.ts`
5. Check that environment variables are set for Production in Vercel
6. Redeploy after making any changes
