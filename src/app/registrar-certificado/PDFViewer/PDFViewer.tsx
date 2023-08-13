import React, { useState, useEffect } from 'react';

import { exibirPDF } from '../../../services/PDF/index'; // Importe a função

import Cookies from 'js-cookie';

const PDFViewer = ({ pdfId }) => {
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token');

    const fetchPDFData = async () => {
      try {
        const response = await exibirPDF(token, pdfId);
        const data = await response.json();

        if (data && data.arquivo) {
          setPdfData(data.arquivo);
        } else {
          console.error('Nenhum dado de PDF encontrado na resposta.');
        }
      } catch (error) {
        console.error('Erro ao buscar o PDF:', error);
      }
    };

    fetchPDFData();
  }, [pdfId]);

  return (
    <div>
      {pdfData && (
        <iframe
          src={`data:application/pdf;base64,${pdfData}`}
          title="PDF Viewer"
          width="100%"
          height="500px"
        ></iframe>
      )}
    </div>
  );
};

export default PDFViewer;
