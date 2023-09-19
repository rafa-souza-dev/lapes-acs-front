'use client';

import TableAccepted from '../TableAccepted';

export default function CardSolicitationsAccepted() {
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
          Solicitações Aceitas
        </p>
      </div>
      <div
        style={{
          width: '100%',
          marginBottom: '4%'
        }}
      >
        <TableAccepted />
      </div>
    </div>
  );
}
