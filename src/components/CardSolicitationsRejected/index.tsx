'use client';

import TableRejected from '../TableRejected';

export default function CardSolicitationsRejected() {
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
          Solicitações Rejeitadas
        </p>
      </div>
      <div
        style={{
          width: '100%',
          marginBottom: '4%'
        }}
      >
        <TableRejected />
      </div>
    </div>
  );
}
