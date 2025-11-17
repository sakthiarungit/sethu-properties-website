import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { sendContactNotificationEmail, sendContactConfirmationEmail } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);

      // Send emails asynchronously (don't wait for them to complete)
      Promise.all([
        sendContactNotificationEmail(inquiry),
        sendContactConfirmationEmail(validatedData),
      ]).catch((error) => {
        console.error("[Routes] Error sending emails:", error);
        // Don't fail the response - emails are non-critical
      });

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
        res.status(500).json({
          success: false,
          message: "Failed to submit inquiry. Please try again.",
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
