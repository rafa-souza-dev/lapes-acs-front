'use client';

import { useState, useEffect } from 'react';

export default function CardSolicitationsArquived() {
  const [apiValue, setApiValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setApiValue(23); // Valor simulado da API
    }, 1000);
  }, []);
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
          Solicitações Arquivadas
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <p
          style={{
            color: 'black',
            fontSize: '2em',
            fontWeight: 'bold',
            marginTop: '5%'
          }}
        >
          {apiValue}
        </p>
      </div>
    </div>
  );
}
