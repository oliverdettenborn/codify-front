import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

import {
  BoxBackground, Title, FormBox, Input, Button, TextLink, Error,
} from '../../components';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [disabledButton, setDisabledButton] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

  if (user.token) {
    history.push('/home');
  }

  function handleLogin(e) {
    e.preventDefault();
    setDisabledButton(true);

    const data = { email, password };
    axios
      .post(`${process.env.REACT_APP_URL_API}/users/sign-in`, data)
      .then((response) => {
        setUser(response.data);
        history.push('/home');
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setError('Email ou senha incorretos');
        } else if (err.response && err.response.status === 404) {
          setError('Sistema fora do ar, tente novamente mais tarde');
        } else {
          setError('Houve um erro desconhecido, tente novamente mais tarde');
        }
      })
      .finally(() => setDisabledButton(false));
  }
  return (
    <BoxBackground>
      <Title />
      <FormBox onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Error>{ error }</Error>}
        <Button type="submit" disabledButton={disabledButton}>
          Entrar
        </Button>
        <TextLink
          to="/cadastro"
          text="Primeira vez? Crie uma conta!"
        />
        <TextLink
          to="/esqueceu-sua-senha"
          text="Esqueceu sua senha?!"
        />
      </FormBox>
    </BoxBackground>
  );
}
