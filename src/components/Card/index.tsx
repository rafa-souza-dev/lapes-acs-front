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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        backgroundColor: '#f0f8ff',
        border: '1px solid #DCDCDC',
        borderRadius: '10px',
        paddingLeft: '2%',
        paddingRight: '2%'
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <p
          style={{
            color: 'black',
            fontSize: '1em',
            fontWeight: 'bold',
            marginTop: '5%'
          }}
        >
          Minhas Horas Por Eixo
        </p>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            width: '100%',
            marginTop: '4%'
          }}
        >
          <p>Extensão</p>
          <ProgressBar progressValue={progress} />
        </div>
        <div
          style={{
            width: '100%',
            marginTop: '4%'
          }}
        >
          <p>Gestão</p>
          <ProgressBar progressValue={progress} />
        </div>
        <div
          style={{
            width: '100%',
            marginTop: '4%'
          }}
        >
          <p>Ensino</p>
          <ProgressBar progressValue={progress} />
        </div>
        <div
          style={{
            width: '100%',
            marginTop: '4%',
            marginBottom: '5%'
          }}
        >
          <p>Pesquisa</p>
          <ProgressBar progressValue={progress} />
        </div>
      </div>
    </div>
  );
}
