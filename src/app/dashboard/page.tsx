'use client';

import CardAll from '../../components/Card';
import CardSolicitations from '../../components/CardSolicitations';
import CardSolicitationsAccepted from '../../components/CardSolicitationsAccepted';
import CardSolicitationsArquived from '../../components/CardSolicitationsArquived';
import CardSolicitationsByYear from '../../components/CardSolicitationsByYear';
import CardSolicitationsRejected from '../../components/CardSolicitationsRejected';
import CardSolicitationsStatus from '../../components/CardSolicitationsStatus';

export default function Dashboard() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
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
            width: '100%',
            height: '75%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignContent: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '20%',
              maxHeight: '60%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '3%'
            }}
          >
            <CardAll />
            <CardSolicitations />
            <CardSolicitationsArquived />
          </div>
          <div
            style={{
              width: '60%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <CardSolicitationsAccepted />
              <CardSolicitationsRejected />
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'flex-start'
              }}
            >
              <CardSolicitationsByYear />
              <CardSolicitationsStatus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
