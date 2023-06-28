'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from '../Button';
import { Input } from '../Input';
import * as S from './styles';

import { Eye, EyeSlash, LockSimple, User } from '@phosphor-icons/react';

export default function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisibility] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [password, setPassword] = useState('');

  const iconEye = isPasswordVisible ? (
    <Eye size={20} onClick={handlePasswordVisibility} />
  ) : (
    <EyeSlash size={20} onClick={handlePasswordVisibility} />
  );

  function handlePasswordVisibility() {
    setIsPasswordVisibility(!isPasswordVisible);
  }

  function handleLogin(ev: React.FormEvent<EventTarget>) {
    ev.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));

    const isPasswordValid = password.length >= 8 && password.length <= 16;

    if (isValidEmail && isPasswordValid) {
      console.log('Email: ' + email + ' senha: ' + password);
    } else {
      setIsValidPassword(false);
    }
  }

  return (
    <S.Container onSubmit={handleLogin}>
      <Image
        src={'/../public/logo-blue.png'}
        alt={'Logo da UPE com fundo azul'}
        width={180}
        height={180}
      />
      <S.InputContainer>
        <div>
          <Input
            placeholder="E-mail"
            startAdornment={<User size={20} />}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          {!isValidEmail ? (
            <S.ErrorSpan>
              E-mail inválido {'(Ex.: email@email.com)'}
            </S.ErrorSpan>
          ) : (
            <></>
          )}
        </div>
        <div>
          <Input
            placeholder="Senha"
            type={!isPasswordVisible ? 'password' : 'text'}
            startAdornment={<LockSimple size={20} />}
            endAdornment={iconEye}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          {!isValidPassword ? (
            <S.ErrorSpan>
              Senha inválida! É necessário ter entre 8 e 16 dígitos
            </S.ErrorSpan>
          ) : (
            <></>
          )}
        </div>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button label="Entrar" type="submit" />
        <S.LinkContainer>
          <S.PasswordRecovery href="">Esqueceu a senha?</S.PasswordRecovery>
          <S.SignUp href="">Cadastrar</S.SignUp>
        </S.LinkContainer>
      </S.ButtonContainer>
    </S.Container>
  );
}
