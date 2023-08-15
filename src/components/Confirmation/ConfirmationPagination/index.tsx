'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { errorToast } from '../../../functions/errorToast';
import { sucessToast } from '../../../functions/sucessToast';
import { getRequest, submitRequest } from '../../../services/request';
import { Certificate } from '../../../services/request/types';
import { ConfirmationContent } from '../ConfirmationContent';
import { Pagination } from '../ConfirmationRequestPagination';
import * as S from './styles';

import Cookies from 'js-cookie';

type ComponentProps = {
  requestId: number;
};

export function ConfirmationPagination({ requestId }: ComponentProps) {
  const router = useRouter();
  const token = Cookies.get('token') ?? '';
  const [currentPage, setCurrentPage] = useState(1);
  const [certificateData, setCertificateData] = useState<Certificate[]>([]);

  useEffect(() => {
    const request = async () => {
      const requestResponse = await getRequest(requestId, token);
      setCertificateData(requestResponse.certificados ?? []);
    };
    request();
  }, [requestId, token]);

  const submit = async () => {
    try {
      await submitRequest(requestId, token);
      sucessToast('Requisição enviada com sucesso!');
      router.push('/home');
    } catch (error) {
      errorToast('Ocorreu um erro! Tente novamente mais tarde!');
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const pageSize = 1;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  let displayedItems: Certificate[] = [];

  if (certificateData != undefined) {
    displayedItems = certificateData.slice(startIndex, endIndex);
  }

  return (
    <div>
      <S.StepConfirmation>Etapa 3 de 3 - Confirmação</S.StepConfirmation>
      <S.Title> Confirmação de envio da Solicitação: {requestId}</S.Title>
      <S.Centered>
        <Pagination
          onPageChange={handlePageChange}
          totalCount={certificateData.length}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </S.Centered>
      {displayedItems.map((item, index) => (
        <ConfirmationContent key={index} {...item} />
      ))}
      <S.Centered>
        <S.Buttons>
          <S.CancelConfirmButton buttonColor={false}>
            Cancelar
          </S.CancelConfirmButton>
          <S.CancelConfirmButton buttonColor={true} onClick={submit}>
            Confirmar
          </S.CancelConfirmButton>
        </S.Buttons>
      </S.Centered>
    </div>
  );
}
