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
} from '../../components';
import UserContext from '../../context/UserContext';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [loading] = useState(false);
  const { user } = useContext(UserContext);

  const requestRecoveryEmail = (e) => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_URL_API}/users/forgot-password`,
        { email },
        { headers: { Authorization: `Bearer ${user.token}` } },
      )
      .then(() => NotificationManager.success('Cheque sua caixa de entrada para redefinir sua senha', 'Email enviado'))
      .catch(() => NotificationManager.error('Verifique se seu e-mail está correto', 'Usuário não encontrado', 4000));
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
