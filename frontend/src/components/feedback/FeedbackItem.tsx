import type { Feedback } from "../../types/feedback";
import "../../styles/feedback.css";

import "../../styles/feedback.css";

interface Props {
  feedback: Feedback;
}

const FeedbackItem = ({ feedback }: Props) => {
  return (
    <div className="feedback-card">
      <p className="feedback-text">{feedback.text}</p>

      <div className="feedback-meta">
        <span className={`badge ${feedback.sentiment}`}>
          {feedback.sentiment}
        </span>
        <span className="date">
          {feedback.createdAt
  ? new Date(feedback.createdAt).toLocaleDateString()
  : "—"}

        </span>
      </div>
    </div>
  );
};

export default FeedbackItem;
