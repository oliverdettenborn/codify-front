/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import InputProfile from './InputProfile';
import { Button, Container, UserAvatar } from '../../../components';
import EditImage from './EditImage';

export default function InputContainer(props) {
  const {
    user,
    setUser,
    name,
    setName,
    email,
    setEmail,
    disabledButton,
    onClick,
    changePassword,
    disablePasswordButton,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
  } = props;
  return (
    <>
      <Container>
        <Container
          flexDirection="column"
        >
          <InputProfile
            label="nome completo"
            placeholder={user.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputProfile
            label="e-mail"
            type="email"
            placeholder={user.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {
            changePassword && (
            <>
              <InputProfile
                type="password"
                label="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                width="55%"
                display="block"
              />
              <InputProfile
                type="password"
                label="repita a senha"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                width="55%"
                display="block"
              />
            </>
            )
          }
        </Container>
        <EditImage user={user} setUser={setUser} />
      </Container>
      <Container
        justifyContent="start"
        margin="20px 0px 0px"
      >
        <Button
          background="white"
          color="#19AACA"
          border="2px solid #19AACA"
          fontsize="21px"
          width="initial"
          padding="0 40px"
          marginRight="10px"
          onClick={onClick}
          type="button"
          display={disablePasswordButton}
        >
          Trocar senha
        </Button>
        <Button
          fontsize="21px"
          width="initial"
          padding="0 40px"
          type="submit"
          disabledButton={disabledButton}
        >
          Salvar
        </Button>
      </Container>
    </>
  );
}
