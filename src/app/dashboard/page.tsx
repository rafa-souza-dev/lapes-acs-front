'use client';

import CardAll from '../../components/Card';
import CardSolicitations from '../../components/CardSolicitations';
import CardSolicitationsAccepted from '../../components/CardSolicitationsAccepted';
import CardSolicitationsArquived from '../../components/CardSolicitationsArquived';

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
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '300px',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <CardAll />
            <CardSolicitations />
            <CardSolicitationsArquived />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <CardSolicitationsAccepted />
          </div>
        </div>
      </div>
    </div>
  );
}
