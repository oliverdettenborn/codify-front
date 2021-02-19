import React, { useState, useContext } from 'react';
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
import UserContext from '../../context/UserContext';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [loading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useContext(UserContext);

  const requestRecoveryEmail = (e) => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_URL_API}/users/forgot-password`,
        { email },
        { headers: { Authorization: `Bearer ${user.token}` } },
      )
      .then(() => NotificationManager.success('Presta por favor', 'Titulo'))
      .catch(() => setError('Usuário não encontrado'));
  };

  return (
    <BoxBackground>
      <Title />
      <FormBox onSubmit={requestRecoveryEmail}>
        <Input
          placeholder="digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />

        {error && <Error>{error}</Error>}

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
