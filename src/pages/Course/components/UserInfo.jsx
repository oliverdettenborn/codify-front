import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {
  PlainText, CourseDataWrapper, Button, UserAvatar, Container,
} from '../../../components';
import ProgressBar from './ProgressBar';

export default function Course({ user, courseId }) {
  const [progress, setProgress] = useState('');

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_API}/users/${user.userId}/courses/${courseId}/progress`,
        { headers: { Authorization: `Bearer ${user.token}` } },
      )
      .then((r) => {
        setProgress(r.data.progress);
      })
      .catch(() => alert('Erro ao carregar progresso no curso'));
  }, []);

  let message;
  const progressNumber = +progress.split('%')[0];
  if (progressNumber >= 0 && progressNumber < 75) {
    message = 'Seja bem vindo de volta! Seu progresso:';
  } else if (progressNumber >= 75) {
    message = `Faltam só ${100 - progressNumber}% para concluir o curso!`;
  }

  return (
    <>
      <CourseDataWrapper height="190px" position="relative" top="-60px" padding="40px">
        <UserProgress>
          <UserAvatar user={user} size="65" />
          <Container flexDirection="column" alignItems="flex-start" margin="0 0 0 25px">
            <PlainText fontSize="1rem">{message}</PlainText>

            <ProgressBar percentage={progress} />
          </Container>
        </UserProgress>
        <Button width="180px">{'Iniciar curso >>'}</Button>
      </CourseDataWrapper>
    </>
  );
}

const UserProgress = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;
