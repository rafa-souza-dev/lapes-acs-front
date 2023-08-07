import React from 'react';

import DeleteDraftModal from '../../../../components/DeleteDraft/DeleteDraftModal';
import ViewRequestModal from '../../../../components/ViewRequest/ViewRequestModal';
import * as S from './styles';

import {
  NotePencil,
  Clock,
  WarningCircle,
  CheckCircle,
  Printer,
  Archive,
  PencilSimpleLine
} from '@phosphor-icons/react';

export type ComponentProps = {
  status: string;
  id: number;
  initialDate: string;
  hours: number;
  token: string;
  isDraft: boolean;
  reloadRequestDelete: () => void;
};

export const RequestList: React.FC<ComponentProps> = ({
  token,
  status,
  id,
  initialDate,
  hours,
  isDraft,
  reloadRequestDelete
}) => {
  isDraft = false;
  if (status === 'RASCUNHO') {
    isDraft = true;
  }
  const iconSize = 24;
  let statusDescription = '';
  status === 'ACEITO'
    ? (statusDescription = 'Concluído')
    : status === 'TRANSITO'
    ? (statusDescription = 'Em análise')
    : status === 'NEGADO'
    ? (statusDescription = 'Indeferido')
    : status === 'RASCUNHO'
    ? (statusDescription = 'Rascunho')
    : (statusDescription = 'Sem status');
  return (
    <div>
      <S.Card cardcolor={isDraft}>
        <S.StatusIcon>
          {isDraft ? (
            <NotePencil size={iconSize} />
          ) : status === 'DEFERIDO' ? (
            <CheckCircle size={iconSize} />
          ) : status === 'ENCAMINHADO_COORDENACAO' ? (
            <Clock size={iconSize} />
          ) : status === 'ENCAMINHADO_COMISSAO' ? (
            <Clock size={iconSize} />
          ) : (
            <WarningCircle size={iconSize} />
          )}
        </S.StatusIcon>
        <S.Content>
          <S.Title>Status:</S.Title>
          <S.Text>{statusDescription}</S.Text>
        </S.Content>
        <S.Content>
          <S.Title>ID:</S.Title>
          <S.Text>{id}</S.Text>
        </S.Content>
        <S.Content>
          <S.Title>Data da solicitação:</S.Title>
          <S.Text>{initialDate}</S.Text>
        </S.Content>
        <S.Content>
          <S.Title>Quantidade de horas:</S.Title>
          <S.Text>{hours} horas</S.Text>
        </S.Content>
        <S.IconsContainer>
          {isDraft ? (
            <S.ActionIcon>
              <PencilSimpleLine size={iconSize} />
            </S.ActionIcon>
          ) : (
            <ViewRequestModal id={id} token={token} />
          )}
          {!isDraft ? null : (
            <DeleteDraftModal
              type={true}
              token={token}
              id={id}
              updateRequestsDelete={reloadRequestDelete}
            ></DeleteDraftModal>
          )}
          <S.ActionIcon>
            {(() => {
              switch (status) {
                case 'DEFERIDO':
                case 'ENCAMINHADO_COORDENACAO':
                case 'ENCAMINHADO_COMISSAO':
                  return <Printer size={iconSize} />;
                case 'INDEFERIDO':
                  return <Archive size={iconSize}></Archive>;
                default:
                  return null;
              }
            })()}
          </S.ActionIcon>
        </S.IconsContainer>
      </S.Card>
    </div>
  );
};
