import { styled } from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 4px;
  height: 16px;
`;

export const ProgressBarFiller = styled.div<{ value: number }>`
  width: ${(props) => props.value}%;
  height: 100%;
  background-color: #0074e4;
  border-radius: 4px;
  transition: width 0.3s ease-in-out;
`;
