'use client';

import Solicitations from '../Solicitations';

export default function CardSolicitations() {
  const solicitationData = [
    {
      id: '12345',
      date: '01/09/2023',
      hours: '12H'
    },
    {
      id: '67890',
      date: '02/09/2023',
      hours: '10H'
    },
    {
      id: '12345',
      date: '01/09/2023',
      hours: '12H'
    },
    {
      id: '67890',
      date: '02/09/2023',
      hours: '10H'
    },
    {
      id: '12345',
      date: '01/09/2023',
      hours: '12H'
    }
  ];
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
          Top Solicitações
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
        {solicitationData.map((solicitation) => (
          <Solicitations
            key={solicitation.id}
            id={solicitation.id}
            date={solicitation.date}
            hours={solicitation.hours}
          />
        ))}
      </div>
    </div>
  );
}
