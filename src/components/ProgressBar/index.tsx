'use client';

import React from 'react';

import * as S from './style';

interface ProgressBarProps {
  progressValue: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progressValue }) => {
  return (
    <S.ProgressBarContainer>
      <S.ProgressBarFiller as="div" value={progressValue}></S.ProgressBarFiller>
    </S.ProgressBarContainer>
  );
};
