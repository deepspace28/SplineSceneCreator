import { ContactSubmission, InsertContact } from "@shared/schema";

export interface IStorage {
  createContactSubmission(submission: InsertContact): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private submissions: Map<number, ContactSubmission>;
  private currentId: number;

  constructor() {
    this.submissions = new Map();
    this.currentId = 1;
  }

  async createContactSubmission(submission: InsertContact): Promise<ContactSubmission> {
    const id = this.currentId++;
    const newSubmission: ContactSubmission = {
      ...submission,
      id,
      submittedAt: new Date()
    };
    this.submissions.set(id, newSubmission);
    return newSubmission;
  }
}

export const storage = new MemStorage();
