import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
  const history = useHistory();

  const requestRecoveryEmail = (e) => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_URL_API}/users/forgot-password`,
        { email },
        { headers: { Authorization: `Bearer ${user.token}` } },
      )
      .then((r) => {
        console.log(r.response);
        history.push('/redefinir-senha');
      })
      .catch((err) => console.log(err));
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
