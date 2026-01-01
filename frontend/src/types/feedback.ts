
export type FeedbackStatus = "PENDING" | "REVIEWED" | "ACTION_REQUIRED";
export type FeedbackSentiment = "POSITIVE" | "NEUTRAL" | "NEGATIVE";
export type FeedbackCategory = "BUG" | "FEATURE" | "GENERAL";

export interface Feedback {
  id: string;
  title: string;
  message: string;
  category: FeedbackCategory;
  sentiment: FeedbackSentiment;
  status: FeedbackStatus;
  createdAt: string;
}
