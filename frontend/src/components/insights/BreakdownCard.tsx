import React from 'react';

interface BreakdownItem {
  label: string;
  count: number;
  percentage: number;
}

interface BreakdownCardProps {
  title: string;
  items: BreakdownItem[];
}

const BreakdownCard: React.FC<BreakdownCardProps> = ({ title, items }) => {
  return (
    <div className="glass-card breakdown-card">
      <h3 className="breakdown-title">{title}</h3>
      <div className="breakdown-list">
        {items.map((item) => (
          <div key={item.label} className="breakdown-item">
            <div className="breakdown-info">
              <span className="breakdown-label">{item.label}</span>
              <span className="breakdown-count">{item.count}</span>
            </div>
            <div className="breakdown-progress-bg">
              <div 
                className="breakdown-progress-fill" 
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreakdownCard;