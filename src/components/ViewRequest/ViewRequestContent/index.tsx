'use client';

import React, { useState } from 'react';

import { sumRequestHours } from '../../../app/home/functions/sumRequestHours';
import { Certificate } from '../../../services/request/types';
import { CertificateList } from '../../CertificateList';
import { Pagination } from '../../Pagination';
import * as S from './styles';

import { Printer } from '@phosphor-icons/react';
import moment from 'moment';

export type ViewRequestProps = {
  id?: number;
  dataDeSubmissao?: Date;
  requisicaoStatus?: string;
  observacao?: string;
  certificados?: Array<Certificate>;
};

export default function ViewRequestContent(props: ViewRequestProps) {
  const { id, dataDeSubmissao, requisicaoStatus, observacao, certificados } =
    props;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const iconSize = 24;
  let statusDescription = '';
  requisicaoStatus === 'ACEITO'
    ? (statusDescription = 'Concluído')
    : requisicaoStatus === 'TRANSITO'
    ? (statusDescription = 'Em análise')
    : requisicaoStatus === 'NEGADO'
    ? (statusDescription = 'Indeferido')
    : requisicaoStatus === 'RASCUNHO'
    ? (statusDescription = 'Rascunho')
    : (statusDescription = 'Sem status');
  const pageSize = 3;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const certificates = !certificados ? [] : certificados;
  const displayedItems = certificates.slice(startIndex, endIndex);
  return (
    <div>
      <S.Container>
        <S.RequestTitle>Solicitação {id}</S.RequestTitle>
        <S.Division />
        <S.GridContainer>
          <S.Content>
            <S.Description>Status: </S.Description>
            <S.Status>
              <S.StatusCircle status={statusDescription}></S.StatusCircle>
              {statusDescription}
            </S.Status>
          </S.Content>
          <S.Content>
            <S.Description>Data da Solicitação:</S.Description>
            <S.RequestDate>
              {moment(dataDeSubmissao).format('DD/MM/YYYY')}
            </S.RequestDate>
          </S.Content>
          <S.Content>
            <S.Description>Quantidade de horas:</S.Description>
            <S.RowAligner>
              <S.HoursAmount>
                {certificados !== undefined
                  ? sumRequestHours(certificados)
                  : null}
              </S.HoursAmount>
              <S.HoursName>hora(s)</S.HoursName>
            </S.RowAligner>
          </S.Content>
        </S.GridContainer>
        <S.Description>Observações do Coordenador:</S.Description>
        <S.CoordObservation>
          {observacao === null ? 'Sem observações na solicitação' : observacao}
        </S.CoordObservation>
        <S.CertificateTitle>Certificados:</S.CertificateTitle>
        <S.Division />
        {displayedItems.map((certificado) => (
          <CertificateList
            key={certificado.id}
            eixoAtividade={certificado.eixoAtividade}
            statusCertificado={certificado.statusCertificado}
            atividade={certificado.atividade}
            hours={certificado.cargaHoraria}
            requestId={id}
            certificateId={certificado.id}
            titulo={certificado.titulo}
          />
        ))}
        <Pagination
          onPageChange={handlePageChange}
          totalCount={certificates.length}
          currentPage={currentPage}
          pageSize={pageSize}
        />
        <S.PrintIcon>
          <Printer size={iconSize} />
        </S.PrintIcon>
      </S.Container>
    </div>
  );
}
