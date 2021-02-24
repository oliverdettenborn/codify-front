/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container, FormBox, Header, PlainText, UserAvatar,
} from '../../components';
import UserContext from '../../context/UserContext';
import { InputContainer } from './components';

export default function Profile() {
  const { user } = useContext(UserContext);
  const history = useHistory();

  if (!user.token) {
    history.push('/');
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
        <UserAvatar user={user} size="75" />
        <PlainText
          fontSize="1.7rem"
          color="white"
          fontWeight="bold"
          margin="10px 0px 0px"
        >
          {user.name}
        </PlainText>
        <FormBox
          width="80%"
        >
          <InputContainer
            user={user}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
          />
        </FormBox>
      </Container>
    </>
  );
}
