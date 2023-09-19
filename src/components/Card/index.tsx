'use client';

import { Progress } from '@chakra-ui/react';

export default function CardAll() {
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
      <Progress value={80} />
      <Progress value={80} />
      <Progress value={80} />
      <Progress value={80} />
    </div>
  );
}
