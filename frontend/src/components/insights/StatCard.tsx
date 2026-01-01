import React from 'react';
import '../../styles/common.css';
import '../../styles/insights.css';

interface StatCardProps {
  title: string;
  value: number | string;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color }) => {
  return (
    <div className="glass-card insight-stat-card">
      <h3 className="insight-stat-title">{title}</h3>
      <div className="insight-stat-value" style={{ color: color || 'var(--text-main)' }}>
        {value}
      </div>
    </div>
  );
};

export default StatCard;