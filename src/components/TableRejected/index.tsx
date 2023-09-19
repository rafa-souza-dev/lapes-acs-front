'use client';

export default function TableRejected() {
  const tableData = [
    {
      id: '1',
      motivo: 'Motivo 1'
    },
    {
      id: '2',
      motivo: 'Motivo 2'
    },
    {
      id: '3',
      motivo: 'Motivo 3'
    },
    {
      id: '4',
      motivo: 'Motivo 4'
    },
    {
      id: '4',
      motivo: 'Motivo 4'
    },
    {
      id: '4',
      motivo: 'Motivo 4'
    },
    {
      id: '4',
      motivo: 'Motivo 4'
    },
    {
      id: '4',
      motivo: 'Motivo 4'
    },
    {
      id: '4',
      motivo: 'Motivo 4'
    },
    {
      id: '4',
      motivo: 'Motivo 4'
    },
    {
      id: '5',
      motivo: 'Motivo 5'
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
        maxHeight: '300px',
        overflowY: 'auto'
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
                  backgroundColor: '#d2d4d9'
                }}
              >
                ID
              </th>
              <th
                style={{
                  backgroundColor: '#d2d4d9'
                }}
              >
                Motivo
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
              <tr
                key={rowData.id}
                style={{
                  borderTop: index > 0 ? '1px solid #DCDCDC' : 'none'
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
                  {rowData.motivo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
