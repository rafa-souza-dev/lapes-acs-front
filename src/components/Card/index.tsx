'use client';

import { ProgressBar } from '../ProgressBar';

export default function CardAll() {
  const progressValues = {
    Extensão: 60,
    Gestão: 30,
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
        backgroundColor: '#f1efef',
        border: '1px solid #DCDCDC',
        borderRadius: '10px',
        paddingLeft: '2%',
        paddingRight: '2%',
        marginBottom: '3%'
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
            <p
              style={{
                fontSize: '0.8em'
              }}
            >
              {category}
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              <ProgressBar progressValue={progress} />
              <p
                style={{
                  fontSize: '0.8em'
                }}
              >
                {progress}h
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
