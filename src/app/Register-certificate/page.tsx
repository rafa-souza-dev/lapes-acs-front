'use client';
import { SetStateAction, useState } from 'react';

import { createCertificate } from '../../services/registerCertificate';
import { CreateCertificate } from '../../services/registerCertificate/types';
import * as S from './style';

import Cookies from 'js-cookie';
import moment from 'moment';

export default function RegistePageTest() {
  const token = Cookies.get('token') || '';
  const [selectedEixo, setSelectedEixo] = useState<string>('');
  const [selectedAtividade, setSelectedAtividade] = useState<string>('');
  const [titulo, setTitulo] = useState('');
  const [horas, setHoras] = useState<number>();
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  const handleAtividadeChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedAtividade(event.target.value);
  };

  const handleChangeTitulo = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setTitulo(value);
  };

  const handleChangeHoras = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setHoras(parseInt(value));
  };

  const handleChangeDataInicial = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setDataInicial(value);
  };

  const handleChangeDataFinal = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setDataFinal(value);
  };

  const createCerificateData: CreateCertificate = {
    titulo: titulo,
    dataIncial: moment(dataInicial).format('MM/DD/YYYY'),
    dataFinal: moment(dataFinal).format('MM/DD/YYYY'),
    quantidadeDeHoras: horas,
    atividadeId: 36
  };

  const registerCertificate = async () => {
    try {
      const fetchCertificate = await createCertificate(
        createCerificateData,
        154,
        token
      );
      alert('certificado cadastrado!');
      console.log(fetchCertificate);
    } catch (error) {
      alert('Houve algum erro ao tentar cadastrar!');
    }
  };

  const handleEixoChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedEixo(event.target.value);
  };

  return (
    <S.Container>
      <S.Title>Etapa 2 de 3 - Preencher formulário</S.Title>
      <S.FormContainer>
        <S.InputArea>
          <S.InputGroup>
            <S.Label>Titulo:</S.Label>
            <S.Input type="text" onChange={handleChangeTitulo} />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Eixo de ensino:</S.Label>
            <S.Select value={selectedEixo} onChange={handleEixoChange}>
              <option value="">Selecione</option>
              <option value="eixo1">Eixo 1</option>
              <option value="eixo2">Eixo 2</option>
              <option value="eixo3">Eixo 3</option>
            </S.Select>
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Atividade:</S.Label>
            <S.Select
              value={selectedAtividade}
              onChange={handleAtividadeChange}
            >
              <option value="">Selecione</option>
              <option value="37">Cursos de capacitação profissional</option>
            </S.Select>
          </S.InputGroup>
        </S.InputArea>

        <S.InputArea>
          <S.InputContainer>
            <S.InputGroup>
              <S.Label>Data inicial:</S.Label>
              <S.Input type="date" onChange={handleChangeDataInicial} />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>Data final:</S.Label>
              <S.Input type="date" onChange={handleChangeDataFinal} />
            </S.InputGroup>
          </S.InputContainer>

          <S.InputContainer>
            <S.InputGroup>
              <S.Label>Quantidade de horas:</S.Label>
              <S.Input type="number" onChange={handleChangeHoras} />
            </S.InputGroup>
          </S.InputContainer>

          <S.InputContainer></S.InputContainer>

          <S.ButtonsContainer>
            <S.SaveButton onClick={registerCertificate}>
              Salvar certificado
            </S.SaveButton>
            <S.ViewButton>Visualizar certificado</S.ViewButton>
          </S.ButtonsContainer>
        </S.InputArea>
      </S.FormContainer>

      <S.CertificatesContainer>
        <S.CertificateItem>Nome do Arquivo 1</S.CertificateItem>
        <S.CertificateItem>Nome do Arquivo 2</S.CertificateItem>
      </S.CertificatesContainer>
    </S.Container>
  );
}