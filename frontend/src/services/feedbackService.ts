import axiosInstance from "./axiosInstance";

export const getFeedbacks = async () => {
  const response = await axiosInstance.get("/api/feedback");
  return response.data;
};

export const createFeedback = async (data: {
  text: string;
  sentiment: string;
}) => {
  const response = await axiosInstance.post("/api/feedback", data);
  return response.data;
};
export const updateFeedbackStatus = async (
  feedbackId: string,
  status: "PENDING" | "REVIEWED" | "ACTION_REQUIRED"
) => {
  const res = await axiosInstance.patch(
    `/feedback/${feedbackId}/status`,
    { status }
  );
  return res.data;
};
