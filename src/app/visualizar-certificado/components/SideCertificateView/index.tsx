import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Certificate } from '../../../../services/request/types';
import Downloadcertificado from '../../../registrar-certificado/PDFViewer/Downloadcertificado';
import * as S from './styles';

import { Printer } from '@phosphor-icons/react';

interface SideViewInterface {
  certificate: Array<Certificate> | undefined;
  onCertificateClick: (id: number) => void;
}

export const SideCertificateView = ({
  certificate,
  onCertificateClick
}: SideViewInterface) => {
  const router = useRouter();
  const [certificates, setCertificates] = useState<Array<Certificate>>([]);
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (certificate !== undefined) {
      setCertificates(certificate);
    }
  }, [certificate, certificates]);

  const backHomeScreen = () => {
    router.push(`/home`);
  };

  const handleCertificateSelect = (id: number | undefined) => {
    if (id !== undefined) {
      setSelectedCertificate(id);
      onCertificateClick(id);
    }
  };

  const handleDownloadClick = () => {
    // Call the downloadPDF function with the desired PDF ID
    Downloadcertificado(4); // Replace 123 with the actual PDF ID
  };
  return (
    <S.Container>
      <S.Content>
        <S.TitleDiv>
          <S.Title>Anexados:</S.Title>
          <S.Line />
        </S.TitleDiv>
        <S.ListDiv>
          {certificates &&
            certificates.map((certificado, index) => {
              if (certificado.id !== undefined) {
                return (
                  <S.CertificateSelect
                    key={index}
                    onClick={() => handleCertificateSelect(certificado.id)}
                    selected={selectedCertificate === certificado.id}
                  >
                    <S.Label>{`Certificado ${certificado.id}`}</S.Label>
                  </S.CertificateSelect>
                );
              }
            })}
        </S.ListDiv>
        <S.ButtonDiv>
          <S.Printer
            label="Imprimir Solicitacao"
            startAdornment={<Printer size={20} />}
            onClick={handleDownloadClick}
          />

          <S.Back label="Voltar" onClick={backHomeScreen} />
        </S.ButtonDiv>
      </S.Content>
    </S.Container>
  );
};
