import React, { useState } from "react";
import { createFeedback } from "../../services/feedbackService";

interface CreateFeedbackFormProps {
  onFeedbackAdded: () => void;
}

const CreateFeedbackForm: React.FC<CreateFeedbackFormProps> = ({
  onFeedbackAdded,
}) => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState<"positive" | "neutral" | "negative">(
    "neutral"
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Submit clicked"); // 👈 ADD THIS

  if (!text.trim()) {
    console.log("Text is empty");
    return;
  }

  try {
    setLoading(true);
    console.log("Sending data:", { text, sentiment }); 
    await createFeedback({ text, sentiment });
    console.log("Feedback created successfully"); 

    setText("");
    setSentiment("neutral");
    onFeedbackAdded();
  } catch (error) {
    console.error("Failed to create feedback", error);
  } finally {
    setLoading(false);
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "rgba(255,255,255,0.08)",
        padding: "20px",
        borderRadius: "16px",
        marginBottom: "24px",
      }}
    >
      <h3 style={{ color: "#fff", marginBottom: "12px" }}>
        Add Feedback
      </h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write feedback here..."
        rows={3}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          resize: "none",
          marginBottom: "12px",
        }}
      />

      <select
        value={sentiment}
        onChange={(e) =>
          setSentiment(e.target.value as "positive" | "neutral" | "negative")
        }
        style={{
          padding: "10px",
          borderRadius: "10px",
          marginBottom: "12px",
        }}
      >
        <option value="positive">Positive</option>
        <option value="neutral">Neutral</option>
        <option value="negative">Negative</option>
      </select>

      <br />

      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          background: "#6366f1",
          color: "#fff",
        }}
      >
        {loading ? "Saving..." : "Submit Feedback"}
      </button>
    </form>
  );
};

export default CreateFeedbackForm;
