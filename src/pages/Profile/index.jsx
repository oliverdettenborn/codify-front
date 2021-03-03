import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import {
  Container, Error, FormBox, Header, PlainText, UserAvatar,
} from '../../components';
import UserContext from '../../context/UserContext';
import { InputContainer } from './components';

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  if (!user.token) {
    history.push('/');
  }
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [disabledButton, setDisabledButton] = useState(false);
  const [error, setError] = useState('');
  const [changePassword, setChangePassword] = useState(false);
  const [disablePasswordButton, setDisablePasswordButton] = useState(false);

  function onClickChangePassword() {
    setChangePassword(true);
    setDisablePasswordButton(true);
  }

  function onSubmit(e) {
    e.preventDefault();
    setDisabledButton(true);
    const data = {};
    if (email && email !== user.email) data.email = email;
    if (name) data.name = name;

    if (changePassword) {
      if (!password || password !== passwordConfirmation) {
        setError('As senhas não batem.');
        setDisabledButton(false);
        return;
      }
      data.password = password;
      data.passwordConfirmation = passwordConfirmation;
    }

    axios
      .put(`${process.env.REACT_APP_URL_API}/users`, data,
        { headers: { Authorization: `Bearer ${user.token}` } })
      .then(() => {
        if (email && email !== user.email) user.email = email;
        if (name) user.name = name;

        if (password) {
          alert('Senha trocada com sucesso');
          setChangePassword(false);
          setDisablePasswordButton(false);
        }
        setUser({ ...user });
      })
      .catch((err) => {
        if (err.response && err.response.status === 409) {
          setError('Este Email já está em uso');
        } else if (err.response && err.response.status === 404) {
          setError('Esse usuário não existe');
        } else if (err.response && err.response.status === 422) {
          setError('Preencha ao menos um campo');
        } else if (err.response && err.response.status === 401) {
          history.push('/');
        } else {
          setError('Houve um erro desconhecido, tente novamente mais tarde');
        }
      })
      .finally(() => {
        setDisabledButton(false);
        setError('');
      });
  }

  return (
    <>
      <Header user={user} />
      <Container
        flexDirection="column"
        justifyContent="start"
        background="#19AACA"
        height="240px"
        padding="1.4rem 0"
        avatarBorder="3px solid"
      >
        <StyledDiv><UserAvatar user={user} size="75" /></StyledDiv>
        <PlainText
          fontSize="1.7rem"
          color="white"
          fontWeight="bold"
          margin="10px 0px 0px"
        >
          {user.name}
        </PlainText>
        <FormBox
          width="70%"
          onSubmit={onSubmit}
        >
          <InputContainer
            user={user}
            setUser={setUser}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            disabledButton={disabledButton}
            onSubmit={onSubmit}
            onClick={onClickChangePassword}
            changePassword={changePassword}
            disablePasswordButton={disablePasswordButton}
            password={password}
            setPassword={setPassword}
            passwordConfirmation={passwordConfirmation}
            setPasswordConfirmation={setPasswordConfirmation}
          />
          {error && <Error>{error}</Error>}
        </FormBox>
      </Container>
    </>
  );
}

const StyledDiv = styled.div`
  border-radius: 50%;
  border: 3px solid white;
`;
