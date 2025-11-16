import { type ContactInquiry, type InsertContactInquiry, contactInquiries } from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getAllContactInquiries(): Promise<ContactInquiry[]>;
}

let dbInstance: ReturnType<typeof drizzle> | null = null;

function getDb() {
  if (!dbInstance) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    dbInstance = drizzle(process.env.DATABASE_URL);
  }
  return dbInstance;
}

export class DbStorage implements IStorage {
  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    try {
      const db = getDb();
      const result = await db
        .insert(contactInquiries)
        .values({
          name: insertInquiry.name,
          email: insertInquiry.email,
          phone: insertInquiry.phone,
          propertyType: insertInquiry.propertyType ?? null,
          serviceInterest: insertInquiry.serviceInterest,
          message: insertInquiry.message,
        })
        .returning();

      return result[0];
    } catch (error) {
      console.error("Error creating contact inquiry:", error);
      throw error;
    }
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    try {
      const db = getDb();
      return await db.select().from(contactInquiries);
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      throw error;
    }
  }
}

// Fallback to memory storage if database is not available
import { randomUUID } from "crypto";

class MemStorage implements IStorage {
  private contactInquiries: Map<string, ContactInquiry>;

  constructor() {
    this.contactInquiries = new Map();
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = {
      ...insertInquiry,
      propertyType: insertInquiry.propertyType ?? null,
      id,
      createdAt: new Date(),
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }
}

// Use database storage in production, fallback to memory in development
export const storage = process.env.NODE_ENV === "production" && process.env.DATABASE_URL
  ? new DbStorage()
  : new MemStorage();
