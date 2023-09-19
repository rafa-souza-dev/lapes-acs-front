'use client';

import { ProgressUpBar } from '../ProgressUpBar';

export default function CardSolicitationsByYear() {
  const progressValues = {
    '2017': 0,
    '2018': 0,
    '2019': 0,
    '2020': 15,
    '2021': 18,
    '2022': 20,
    '2023': 17
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100px',
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
          Solicitações Registradas Por ano
        </p>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '4%'
        }}
      >
        {Object.entries(progressValues).map(([year, progress]) => (
          <div
            key={year}
            style={{
              width: '100%',
              marginTop: '4%'
            }}
          >
            <ProgressUpBar progressValue={progress} />
            <p>{year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
