import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const submission = insertContactSchema.parse(req.body);
      const result = await storage.createContactSubmission(submission);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: String(error) });
    }
  });

  return createServer(app);
}
