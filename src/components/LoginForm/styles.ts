import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorSpan = styled.span`
  color: red;
  font-size: 12px;
  padding-left: 15px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 15px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
`;

export const PasswordRecovery = styled.a`
  font-weight: 300;
  font-size: 12px;
`;

export const SignUp = styled.a`
  font-weight: 700;
  font-size: 12px;
`;
