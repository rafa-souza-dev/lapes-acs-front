'use client';

export default function TableAccepted() {
  const tableData = [
    {
      id: '1',
      horasReg: '40H',
      horasCom: '30H',
      eixo: 'Extensão'
    },
    {
      id: '2',
      horasReg: '35H',
      horasCom: '25H',
      eixo: 'Gestão'
    },
    {
      id: '3',
      horasReg: '20H',
      horasCom: '15H',
      eixo: 'Ensino'
    },
    {
      id: '4',
      horasReg: '50H',
      horasCom: '40H',
      eixo: 'Pesquisa'
    },
    {
      id: '5',
      horasReg: '45H',
      horasCom: '35H',
      eixo: 'Extensão'
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
        paddingRight: '2%'
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '4%'
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '4%'
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: '#d2d4d9' // Cor de fundo para o cabeçalho
                }}
              >
                ID
              </th>
              <th
                style={{
                  backgroundColor: '#d2d4d9' // Cor de fundo para o cabeçalho
                }}
              >
                Horas Reg.
              </th>
              <th
                style={{
                  backgroundColor: '#d2d4d9' // Cor de fundo para o cabeçalho
                }}
              >
                Horas Com
              </th>
              <th
                style={{
                  backgroundColor: '#d2d4d9' // Cor de fundo para o cabeçalho
                }}
              >
                Eixo
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
              <tr
                key={rowData.id}
                style={{
                  borderTop: index > 0 ? '1px solid #DCDCDC' : 'none' // Adiciona linhas divisórias entre as linhas
                }}
              >
                <td
                  style={{
                    backgroundColor: '#f1efef',
                    border: '1px solid #DCDCDC'
                  }}
                >
                  {rowData.id}
                </td>
                <td
                  style={{
                    backgroundColor: '#f1efef',
                    border: '1px solid #DCDCDC'
                  }}
                >
                  {rowData.horasReg}
                </td>
                <td
                  style={{
                    backgroundColor: '#f1efef',
                    border: '1px solid #DCDCDC'
                  }}
                >
                  {rowData.horasCom}
                </td>
                <td
                  style={{
                    backgroundColor: '#f1efef',
                    border: '1px solid #DCDCDC'
                  }}
                >
                  {rowData.eixo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
