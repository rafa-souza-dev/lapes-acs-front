'use client';

import CardAll from '../../components/Card';
import CardSolicitations from '../../components/CardSolicitations';

export default function Dashboard() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100vh',
        background: '#f1efef'
      }}
    >
      <div
        style={{
          width: '90%',
          marginLeft: '100px'
        }}
      >
        <div
          style={{
            width: '100%'
          }}
        >
          <h1
            style={{
              color: '#1c3c78'
            }}
          >
            Seu Resumo
          </h1>
          <div
            style={{
              border: 'none',
              borderTop: '1px solid #1c3c78',
              width: '100%'
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            height: '70%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CardAll />
          <CardSolicitations />
        </div>
      </div>
    </div>
  );
}
