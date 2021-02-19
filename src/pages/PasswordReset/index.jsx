import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';
import axios from 'axios';

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

  const alert = useAlert();

  const { token } = useParams();

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
      .then(() => alert.show('senha redefinida'))
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          alert.show('Não foi possível alterar sua senha');
        } else if (err.response && err.response.status === 404) {
          alert.show('As senhas precisam ser iguais');
        } else {
          alert.show('Houve um erro desconhecido, tente novamente mais tarde');
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
