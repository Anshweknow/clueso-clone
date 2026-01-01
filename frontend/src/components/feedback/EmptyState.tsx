import React from "react";

const EmptyState: React.FC = () => {
  return (
    <div
      style={{
        padding: "60px",
        textAlign: "center",
        color: "#cbd5f5",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "20px",
      }}
    >
      <h2>No feedback yet</h2>
      <p style={{ marginTop: "10px", opacity: 0.8 }}>
        Feedback submitted by users will appear here.
      </p>
    </div>
  );
};

export default EmptyState;
