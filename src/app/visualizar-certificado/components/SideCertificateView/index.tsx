import { useEffect, useState } from 'react';

import { Certificate } from '../../../../services/request/types';
import * as S from './styles';

import { Printer } from '@phosphor-icons/react';

interface SideViewInterface {
  certificate: Array<Certificate>;
  onCertificateClick: (id: number) => void;
}

export const SideCertificateView = ({
  certificate,
  onCertificateClick
}: SideViewInterface) => {
  const [certificates, setCertificates] = useState<Array<Certificate>>([]);

  useEffect(() => {
    setCertificates(certificate);
  }, [certificate, certificates]);

  return (
    <S.Container>
      <S.Content>
        <S.TitleDiv>
          <S.Title>Anexados:</S.Title>
          <S.Line />
        </S.TitleDiv>
        <S.ListDiv>
          {certificates &&
            certificates.map((certificado, index) => (
              <S.CertificateSelect
                key={index}
                onClick={() => onCertificateClick(certificado.id)}
              >
                <S.Label>{`Certificado ${certificado.id}`}</S.Label>
              </S.CertificateSelect>
            ))}
        </S.ListDiv>
        <S.ButtonDiv>
          <S.Printer
            label="Imprimir Solicitacao"
            startAdornment={<Printer size={20} />}
          />

          <S.Back label="Voltar" />
        </S.ButtonDiv>
      </S.Content>
    </S.Container>
  );
};
