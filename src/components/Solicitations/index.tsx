'use client';

export default function Solicitations() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'start',
        backgroundColor: '#d2d4d9',
        border: '1px solid #DCDCDC',
        borderRadius: '5px',
        paddingLeft: '2%',
        paddingRight: '2%',
        marginTop: '2%',
        marginBottom: '2%'
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <p
            style={{
              color: 'black',
              fontSize: '1em',
              fontWeight: 'bold'
            }}
          >
            ID:
          </p>
          <p>XXXXXXX</p>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <p
            style={{
              color: 'black',
              fontSize: '1em',
              fontWeight: 'bold'
            }}
          >
            Data:
          </p>
          <p>Dia/mês/ano</p>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <p
          style={{
            color: 'black',
            fontSize: '1em',
            fontWeight: 'bold'
          }}
        >
          Horas:
        </p>
        <p>00H</p>
      </div>
    </div>
  );
}
