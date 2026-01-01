import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import "../styles/common.css";
import { getDashboardStats } from "../services/dashboardService";

const Dashboard: React.FC = () => {
  const [totalFeedback, setTotalFeedback] = useState<number>(0);
  const [averageSentiment, setAverageSentiment] = useState<number>(0);
  const [pendingReviews, setPendingReviews] = useState<number>(0);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const stats = await getDashboardStats();
        setTotalFeedback(stats.totalFeedback);
        setAverageSentiment(stats.averageSentiment);
        setPendingReviews(stats.pendingReviews);
      } catch (error) {
        console.error("Failed to load dashboard stats", error);
      }
    };

    loadStats();
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p className="subtitle">Real-time feedback and sentiment analysis.</p>
      </div>

      <div className="stats-grid">
        <div className="glass-card stat-card">
          <span className="stat-label">Total Feedback</span>
          <h2 className="stat-value">{totalFeedback}</h2>
          <p className="stat-footer positive">Live data</p>
        </div>

        <div className="glass-card stat-card">
          <span className="stat-label">Average Sentiment</span>
          <h2 className="stat-value">{averageSentiment}%</h2>
          <p className="stat-footer positive">
            {averageSentiment >= 70 ? "Excellent" : "Needs attention"}
          </p>
        </div>

        <div className="glass-card stat-card">
          <span className="stat-label">Pending Reviews</span>
          <h2 className="stat-value">{pendingReviews}</h2>
          <p className="stat-footer">Action required</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
