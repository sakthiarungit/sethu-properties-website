import express from 'express';
import path from 'path';
import fs from 'fs';
import { z } from 'zod';
import { randomUUID } from 'crypto';

const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}

// Storage implementation
interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyType: string | null;
  serviceInterest: string;
  message: string;
  createdAt: Date;
}

interface InsertContactInquiry {
  name: string;
  email: string;
  phone: string;
  propertyType?: string | null;
  serviceInterest: string;
  message: string;
}

// Simple in-memory storage for Vercel
const inquiries = new Map<string, ContactInquiry>();

// Validation schema
const insertContactInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  propertyType: z.string().optional().nullable(),
  serviceInterest: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

// API route for contact form
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactInquirySchema.parse(req.body);
    const id = randomUUID();
    const inquiry: ContactInquiry = {
      id,
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      propertyType: validatedData.propertyType ?? null,
      serviceInterest: validatedData.serviceInterest,
      message: validatedData.message,
      createdAt: new Date(),
    };
    inquiries.set(id, inquiry);

    res.json({
      success: true,
      inquiry,
      message: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        errors: error.errors,
      });
    } else {
      console.error("Contact error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to submit inquiry. Please try again.",
      });
    }
  }
});

// Serve static files from dist/public
const publicPath = path.join(process.cwd(), 'dist', 'public');
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));
}

// Fallback to index.html for React routing
app.get('*', (req, res) => {
  const indexPath = path.join(publicPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Not Found');
  }
});

// Export handler for Vercel
export default async (req: any, res: any) => {
  try {
    return app(req, res);
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
