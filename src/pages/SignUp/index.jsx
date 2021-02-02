import React, { useState } from 'react';

import {
  Title, BoxBackground, Input, FormBox, Button, TextLink,
} from '../../components';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <BoxBackground>
      <Title />
      <FormBox onSubmit={onSubmit}>
        <Input type="text" placeholder="Nome completo" value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="password" placeholder="Repetir senha" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
        <Button>Cadastrar</Button>
        <TextLink to="/" text="Já tem conta? Faça seu login" />
        <TextLink to="/esqueceu-sua-senha" text="Esqueceu sua senha?" />
      </FormBox>
    </BoxBackground>
  );
}
