'use client';

import React from 'react';

const ProgressBarFiller = (props: { value: number }) => {
  return (
    <div
      style={{
        width: '100%',
        height: `${props.value}%`,
        backgroundColor: '#00008B',
        borderRadius: '4px',
        transition: 'height 0.3s ease-in-out'
      }}
    />
  );
};

interface ProgressBarProps {
  progressValue: number;
}

export const ProgressUpBar: React.FC<ProgressBarProps> = ({
  progressValue
}) => {
  return (
    <div
      style={{
        width: '50%', // Largura fixa para preenchimento vertical
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
        height: '100%', // Altura máxima
        display: 'flex',
        flexDirection: 'column-reverse' // Altera a orientação para vertical e inverte
      }}
    >
      <ProgressBarFiller value={progressValue}></ProgressBarFiller>
    </div>
  );
};
