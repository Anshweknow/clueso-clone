import axiosInstance from "../api/axios";

export interface DashboardStats {
  totalFeedback: number;
  averageSentiment: number;
  pendingReviews: number;
}

export const getDashboardStats = async (): Promise<DashboardStats> => {
  // 1️⃣ Fetch feedback list
  const feedbackRes = await axiosInstance.get("/feedback");
  const feedbacks = feedbackRes.data;

  const totalFeedback = feedbacks.length;

  // 2️⃣ Calculate average sentiment
  const sentimentScoreMap: Record<string, number> = {
    positive: 1,
    neutral: 0.5,
    negative: 0,
  };

  const totalScore = feedbacks.reduce(
    (sum: number, fb: any) => sum + (sentimentScoreMap[fb.sentiment] ?? 0),
    0
  );

  const averageSentiment =
    totalFeedback === 0 ? 0 : Math.round((totalScore / totalFeedback) * 100);

  // 3️⃣ Pending reviews (example logic)
  const pendingReviews = feedbacks.filter(
    (fb: any) => fb.status === "pending"
  ).length;

  return {
    totalFeedback,
    averageSentiment,
    pendingReviews,
  };
};
