import React, { useEffect, useState } from "react";
import { getFeedbacks } from "../services/feedbackService";
import type { Feedback } from "../types/feedback";


import FeedbackCard from "../components/feedback/FeedbackCard";
import EmptyState from "../components/feedback/EmptyState";
import CreateFeedbackForm from "../components/feedback/CreateFeedbackForm";

const FeedbackPage: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedbacks = async () => {
    try {
      const data = await getFeedbacks();

      if (Array.isArray(data)) {
        setFeedbacks(data);
      } else {
        setFeedbacks([]);
      }
    } catch (err) {
      console.error("Failed to fetch feedbacks", err);
      setFeedbacks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  if (loading) {
    return <p style={{ color: "#fff" }}>Loading feedback...</p>;
  }

  return (
    <div>
      <h1 style={{ color: "#fff", marginBottom: "20px" }}>Feedback</h1>

      <CreateFeedbackForm onFeedbackAdded={fetchFeedbacks} />

      {feedbacks.length === 0 ? (
        <EmptyState />
      ) : (
        feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))
      )}
    </div>
  );
};

export default FeedbackPage;
