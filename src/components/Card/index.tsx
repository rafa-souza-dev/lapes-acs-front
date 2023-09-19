'use client';

import { useEffect, useState } from 'react';

import { ProgressBar } from '../ProgressBar';

export default function CardAll() {
  const progressValues = {
    Extensao: 60,
    Gestao: 30,
    Ensino: 15,
    Pesquisa: 70
  };

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
          flexDirection: 'column',
          marginBottom: '4%'
        }}
      >
        {Object.entries(progressValues).map(([category, progress]) => (
          <div
            key={category}
            style={{
              width: '100%',
              marginTop: '4%'
            }}
          >
            <p>{category}</p>
            <ProgressBar progressValue={progress} />
          </div>
        ))}
      </div>
    </div>
  );
}
