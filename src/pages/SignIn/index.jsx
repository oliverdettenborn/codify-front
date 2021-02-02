import React, { useState } from 'react';

import {
  BoxBackground, Title, FormBox, Input, Button, TextLink,
} from '../../components';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();
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
        <Button type="submit">
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
