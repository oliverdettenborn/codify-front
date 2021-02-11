/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {
  PlainText, CourseDataWrapper, Button, UserAvatar, Container,
} from '../../../components';
import ProgressBar from './ProgressBar';

export default function Course({ user, courseId }) {
  const [progress, setProgress] = useState(20);
  const [disabledButton, setDisabledButton] = useState(false);
  const [hasStarted, setHasStarted] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_API}/users/${user.userId}/courses/${courseId}/progress`,
        { headers: { Authorization: `Bearer ${user.token}` } },
      )
      .then((r) => {
        setProgress(+r.data.progress);
        setHasStarted(r.data.hasStarted);
      })
      .catch(() => alert('Erro ao carregar progresso no curso'));
  }, []);

  function initCourse() {
    setDisabledButton(true);
  }

  return (
    <CourseDataWrapper height="190px" position="relative" top="-60px" padding="43px">
      <UserProgress>
        <UserAvatar user={user} size="55" />
        <Container flexDirection="column" alignItems="flex-start" margin="0 0 0 25px">
          <PlainText fontSize="1.3rem">
            {
                hasStarted
                  ? (progress >= 0 && progress < 50)
                    ? `Você já concluiu ${progress}% do curso!`
                    : (progress === 100)
                      ? 'Você já concluiu o curso!'
                      : `Faltam só ${100 - progress}% para concluir o curso!`
                  : 'Você não iniciou esse curso ainda'
              }
          </PlainText>

          <ProgressBar percentage={progress} />
        </Container>
      </UserProgress>
      <Button width="180px" onClick={initCourse} disabledButton={disabledButton}>{'Iniciar curso >>'}</Button>
    </CourseDataWrapper>
  );
}

const UserProgress = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;
