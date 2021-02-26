import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Title, BoxBackground, Input, FormBox, Button, TextLink, Error,
} from '../../components';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [disabledButton, setDisabledButton] = useState(false);
  const history = useHistory();
  function onSubmit(e) {
    e.preventDefault();
    setDisabledButton(true);
    axios.post(`${process.env.REACT_APP_URL_API}/users/register`, {
      name, email, password, passwordConfirmation: repeatPassword,
    }).then(() => history.push('/'))
      .catch((err) => {
        if (err.response && err.response.status === 409) {
          setError('Email já está em uso');
        } else if (err.response && err.response.status === 422) {
          setError('As senhas precisam ser iguais!');
        } else {
          setError('Houve um erro desconhecido, tente novamente mais tarde');
        }
      })
      .finally(() => setDisabledButton(false));
  }
  return (
    <BoxBackground>
      <Title />
      <FormBox onSubmit={onSubmit}>
        <Input type="text" placeholder="Nome completo" value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="password" placeholder="Repetir senha" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
        {error && <Error>{ error }</Error>}
        <Button type="submit" disabledButton={disabledButton}>Cadastrar</Button>
        <TextLink to="/" text="Já tem conta? Faça seu login" />
        <TextLink to="/esqueceu-sua-senha" text="Esqueceu sua senha?" />
      </FormBox>
    </BoxBackground>
  );
}
