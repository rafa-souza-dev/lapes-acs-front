'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { login } from '../../../../services/signIn';
import { Login } from '../../../../services/signIn/types';
import LoginButton from '../LoginButton';
import { LoginInput } from '../LoginInput';
import { Register } from '../Register';
import * as S from './styles';

import {
  Eye,
  EyeSlash,
  LockSimple,
  User,
  XCircle
} from '@phosphor-icons/react';
import Cookies from 'js-cookie';

export default function LoginForm() {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisibility] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmailAndPassword, setIsValidEmailAndPassword] =
    useState<boolean>(true);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [password, setPassword] = useState('');
  const [OpenRegister, setOpenRegister] = useState(false);

  const iconEye = isPasswordVisible ? (
    <Eye size={20} onClick={handlePasswordVisibility} />
  ) : (
    <EyeSlash size={20} onClick={handlePasswordVisibility} />
  );

  const signInData: Login = {
    email: email,
    senha: password
  };

  function handlePasswordVisibility() {
    setIsPasswordVisibility(!isPasswordVisible);
  }

  function registerOpen() {
    setOpenRegister(true);
  }

  function registerClose() {
    setOpenRegister(false);
  }

  async function handleLogin(ev: React.FormEvent<EventTarget>) {
    ev.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));

    const isPasswordValid = password.length >= 8 && password.length <= 16;

    if (isValidEmail && isPasswordValid) {
      try {
        const response = await login(signInData);
        const tokenDuration = new Date(Date.now() + 1000 * 60 * 48); //48min

        Cookies.set('token', response.token, {
          expires: tokenDuration
        });
        setIsValidEmail(true);
        router.push('/home');
      } catch (error) {
        setIsValidEmailAndPassword(false);
      }
      //console.log('Email: ' + email + ' senha: ' + password);
    } else {
      setIsValidPassword(false);
    }
  }

  return (
    <S.Container onSubmit={handleLogin}>
      <Image
        src={'/logo-blue.png'}
        alt={'Logo da UPE com fundo azul'}
        width={180}
        height={180}
      />
      {!isValidEmailAndPassword ? (
        <S.ErrorSpan>Email e/ou senha inválidos</S.ErrorSpan>
      ) : (
        <></>
      )}
      <S.InputContainer>
        <div>
          <LoginInput
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
          <LoginInput
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
        <LoginButton label="Entrar" type="submit" />
        <S.LinkContainer>
          <S.SignUp onClick={registerOpen}>Cadastrar</S.SignUp>
          <S.ModalContainer
            closeModalArea={registerClose}
            isOpen={OpenRegister}
            closeModal={registerClose}
            // eslint-disable-next-line react/no-children-prop
            children={<Register />}
            closeText={<XCircle size={32} />}
          ></S.ModalContainer>
        </S.LinkContainer>
      </S.ButtonContainer>
    </S.Container>
  );
}
