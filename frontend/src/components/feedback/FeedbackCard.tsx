import React, { useState } from "react";
import { updateFeedbackStatus } from "../../services/feedbackService";
import type { Feedback } from "../../types/feedback";


interface Props {
  feedback: Feedback;
}

const statusColors: Record<Feedback["status"], string> = {
  PENDING: "#facc15",
  REVIEWED: "#4ade80",
  ACTION_REQUIRED: "#f87171",
};

const FeedbackCard: React.FC<Props> = ({ feedback }) => {
  const [status, setStatus] = useState<Feedback["status"]>(feedback.status);
  const [loading, setLoading] = useState(false);

  const handleStatusChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newStatus = e.target.value as Feedback["status"];
    setLoading(true);

    try {
      await updateFeedbackStatus(feedback.id, newStatus);
      setStatus(newStatus);
    } catch (err) {
      console.error("Failed to update status", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card" style={{ marginBottom: 20 }}>
      <h3>{feedback.title}</h3>
      <p>{feedback.message}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 16,
        }}
      >
        <span
          style={{
            padding: "4px 10px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
            backgroundColor: statusColors[status],
            color: "#020617",
          }}
        >
          {status.replace("_", " ")}
        </span>

        <select
          value={status}
          onChange={handleStatusChange}
          disabled={loading}
        >
          <option value="PENDING">Pending</option>
          <option value="REVIEWED">Reviewed</option>
          <option value="ACTION_REQUIRED">Action Required</option>
        </select>
      </div>
    </div>
  );
};

export default FeedbackCard;
