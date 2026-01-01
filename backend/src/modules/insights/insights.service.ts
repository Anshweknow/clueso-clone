import { prisma } from "../../config/db";

export class InsightsService {
  static async getInsights(userId: string) {
    const feedback = await prisma.feedback.findMany({
      where: { userId },
    });

    const total = feedback.length;

    const sentimentCount = {
      POSITIVE: 0,
      NEUTRAL: 0,
      NEGATIVE: 0,
    };

    const categoryCount = {
      BUG: 0,
      FEATURE: 0,
      GENERAL: 0,
    };

    feedback.forEach(fb => {
      sentimentCount[fb.sentiment]++;
      categoryCount[fb.category]++;
    });

    // Rule-based “AI” summary
    let summary = "User feedback is balanced.";

    if (sentimentCount.NEGATIVE > sentimentCount.POSITIVE) {
      summary = "Users are facing notable issues and dissatisfaction.";
    } else if (sentimentCount.POSITIVE > sentimentCount.NEGATIVE) {
      summary = "Users are generally satisfied with the product.";
    }

    return {
      totalFeedback: total,
      sentimentCount,
      categoryCount,
      summary,
    };
  }
}
