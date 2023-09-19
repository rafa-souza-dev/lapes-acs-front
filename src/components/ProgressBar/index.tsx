'use client';

import React from 'react';

const ProgressBarFiller = (props: { value: number }) => {
  return (
    <div
      style={{
        width: `${props.value}%`,
        height: '100%',
        backgroundColor: '#00008B',
        borderRadius: '4px',
        transition: 'width 0.3s ease-in-out'
      }}
    />
  );
};

interface ProgressBarProps {
  progressValue: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progressValue }) => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
        height: '16px'
      }}
    >
      <ProgressBarFiller value={progressValue}></ProgressBarFiller>
    </div>
  );
};
