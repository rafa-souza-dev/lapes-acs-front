'use client';

import CardAll from '../../components/Card';
import * as S from './styles';

export default function Dashboard() {
  return (
    <S.Container>
      <S.Content>
        <S.TitleDiv>
          <S.Title>Seu Resumo</S.Title>
          <S.Line />
        </S.TitleDiv>
        <S.Lacuna>
          <CardAll />
        </S.Lacuna>
      </S.Content>
    </S.Container>
  );
}
