import React, { useEffect, useState } from 'react';
import { getFeedbacks } from '../services/feedbackService';
import StatCard from '../components/insights/StatCard';
import BreakdownCard from '../components/insights/BreakdownCard';
import '../styles/insights.css';

interface Feedback {
  id: string;
  category: "BUG" | "FEATURE" | "GENERAL";
  sentiment: "POSITIVE" | "NEUTRAL" | "NEGATIVE";
}

const Insights: React.FC = () => {
  const [data, setData] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const feedbacks = await getFeedbacks();
        setData(feedbacks || []);
      } catch (error) {
        console.error("Failed to fetch insights:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInsights();
  }, []);

  // Derived Statistics
  const total = data.length;

  const getCount = (key: keyof Feedback, value: string) => 
    data.filter(item => item[key] === value).length;

  const calcPercent = (count: number) => total > 0 ? Math.round((count / total) * 100) : 0;

  if (loading) return <div className="insights-loading">Analyzing data...</div>;

  return (
    <div className="insights-page">
      <header className="insights-header">
        <h1>Insights</h1>
        <p className="subtitle">Automated breakdown of user feedback sentiment and categories.</p>
      </header>

      {total === 0 ? (
        <div className="glass-card empty-insights">
          No feedback data available to generate insights.
        </div>
      ) : (
        <>
          <div className="insights-stats-grid">
            <StatCard title="Total Feedbacks" value={total} />
            <StatCard title="Positive Rate" value={`${calcPercent(getCount('sentiment', 'POSITIVE'))}%`} color="#4ade80" />
            <StatCard title="Bug Reports" value={getCount('category', 'BUG')} color="#f87171" />
          </div>

          <div className="breakdown-grid">
            <BreakdownCard 
              title="Sentiment Analysis"
              items={[
                { label: 'Positive', count: getCount('sentiment', 'POSITIVE'), percentage: calcPercent(getCount('sentiment', 'POSITIVE')) },
                { label: 'Neutral', count: getCount('sentiment', 'NEUTRAL'), percentage: calcPercent(getCount('sentiment', 'NEUTRAL')) },
                { label: 'Negative', count: getCount('sentiment', 'NEGATIVE'), percentage: calcPercent(getCount('sentiment', 'NEGATIVE')) },
              ]}
            />

            <BreakdownCard 
              title="Category Distribution"
              items={[
                { label: 'Feature Requests', count: getCount('category', 'FEATURE'), percentage: calcPercent(getCount('category', 'FEATURE')) },
                { label: 'Bugs', count: getCount('category', 'BUG'), percentage: calcPercent(getCount('category', 'BUG')) },
                { label: 'General', count: getCount('category', 'GENERAL'), percentage: calcPercent(getCount('category', 'GENERAL')) },
              ]}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Insights;