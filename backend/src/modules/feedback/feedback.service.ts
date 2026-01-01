import { prisma } from "../../config/db";

export class FeedbackService {
  static async createFeedback(data: {
    message: string;
    category: "BUG" | "FEATURE" | "GENERAL";
    sentiment: "POSITIVE" | "NEUTRAL" | "NEGATIVE";
    source: "WEB" | "WIDGET";
    userId: string;
  }) {
    const { message, category, sentiment, source, userId } = data;

    return prisma.feedback.create({
      data: {
        title: message.slice(0, 50),
        message,
        category,
        sentiment,
        source,
        userId,
        // status defaults to PENDING
      },
    });
  }

  static async listFeedback(userId: string) {
    return prisma.feedback.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }
  // ✅ STATUS UPDATE (NO ENUM IMPORT)
  static async updateStatus(
    feedbackId: string,
    status: "PENDING" | "REVIEWED" | "ACTION_REQUIRED",
    userId: string
  ) {
    return prisma.feedback.update({
      where: {
        id: feedbackId,
        userId,
      },
      data: {
        status,
      },
    });
  }
}
