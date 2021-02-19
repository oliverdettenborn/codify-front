import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

import {
  BoxBackground,
  Title,
  FormBox,
  Input,
  Button,
  TextLink,
  Error,
} from '../../components';

export default function PasswordReset() {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { token } = useParams();
  const history = useHistory();

  function handleResetPassword(e) {
    e.preventDefault();
    setLoading(true);

    if (password !== repeatPassword) {
      setError('As senhas precisam ser iguais');
      setLoading(false);
    }

    axios
      .put(`${process.env.REACT_APP_URL_API}/users/password-reset`, {
        password,
        passwordConfirmation: repeatPassword,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        NotificationManager.success('Senha redefinida com sucesso!', 'Faça login para continuar');
        history.push('/');
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          NotificationManager.error('Não foi possível alterar sua senha');
        } else {
          NotificationManager.error('Houve um erro desconhecido, tente novamente mais tarde');
        }
      })
      .finally(() => setLoading(false));
  }

  return (
    <BoxBackground>
      <Title />
      <FormBox onSubmit={handleResetPassword}>
        <Input
          placeholder="nova senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <Input
          placeholder="repita sua senha"
          onChange={(e) => setRepeatPassword(e.target.value)}
          value={repeatPassword}
          type="password"
        />

        {
          error && <Error>{error}</Error>
        }

        <Button type="submit" disabledButton={loading}>
          recuperar senha
        </Button>

        <TextLink
          to="/"
          text="voltar para login"
        />
      </FormBox>
    </BoxBackground>
  );
}
