'use client';

import { useEffect, useState } from 'react';

import { ProgressBar } from '../ProgressBar';

export default function CardAll() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div
      style={{
        width: '100%',
        height: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        backgroundColor: '#f0f8ff',
        border: '1px solid black',
        borderRadius: '4px'
      }}
    >
      <p
        style={{
          color: 'black',
          fontSize: '1em',
          fontWeight: 'bold'
        }}
      >
        Minhas Horas Por Eixo
      </p>
      <ProgressBar progressValue={progress} />
    </div>
  );
}
