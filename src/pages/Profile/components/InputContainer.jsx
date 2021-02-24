/* eslint-disable no-unused-vars */
import React from 'react';
import InputProfile from './InputProfile';
import { Button, Container, UserAvatar } from '../../../components';

export default function InputContainer(props) {
  const {
    user,
    name,
    setName,
    email,
    setEmail,
  } = props;
  return (
    <>
      <Container>
        <Container
          flexDirection="column"
          margin="0px 70px 0px 0px"
        >
          <InputProfile
            label="nome completo"
            placeholder={user.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputProfile
            label="e-mail"
            placeholder={user.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Container>
        <UserAvatar user={user} size="140" />
      </Container>
      <Container
        justifyContent="start"
        margin="20px 0px 0px"
      >
        <Button
          fontsize="21px"
          width="initial"
          padding="0 40px"
          marginRight="10px"
        >
          Trocar senha
        </Button>
        <Button
          fontsize="21px"
          width="initial"
          padding="0 40px"
        >
          Salvar
        </Button>
      </Container>
    </>
  );
}
