'use client';

import { ProgressBar } from '../ProgressBar';

export default function CardSolicitationsStatus() {
  const progressValues = {
    Aceitas: 60,
    Rejeitadas: 30
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        backgroundColor: '#f1efef',
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
          Status Das Solicitações
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
