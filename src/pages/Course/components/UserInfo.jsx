/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import {
  PlainText, CourseDataWrapper, Button, UserAvatar, Container,
} from '../../../components';
import ProgressBar from './ProgressBar';
import CourseContext from '../../../context/CourseContext';
import mediaQuery from '../../../utils/mediaQuery';

export default function Course({
  user, setUser, courseId, chapters,
}) {
  const [progress, setProgress] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);
  const [hasStarted, setHasStarted] = useState(true);
  const { lastTopicId } = useContext(CourseContext);

  const history = useHistory();

  if (!user.token) {
    history.push('/');
  }

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_API}/users/courses/${courseId}/progress`,
        { headers: { Authorization: `Bearer ${user.token}` } },
      )
      .then((r) => {
        setProgress(+r.data.progress || 0);
        setHasStarted(r.data.hasStarted || false);
      })
      .catch(() => alert('Erro ao carregar progresso no curso'));
  }, []);

  function initCourse() {
    setDisabledButton(true);

    axios
      .post(
        `${process.env.REACT_APP_URL_API}/courses/${courseId}/users`,
        null,
        { headers: { Authorization: `Bearer ${user.token}` } },
      )
      .then(() => {
        user.hasInitAnyCourse = true;
        setUser({ ...user });
        history.push(`/estudo/${courseId}/topic/${chapters[0].topics[0].id}`);
      })
      .catch(() => {
        alert('Não foi possível iniciar esse curso no momento, tente novamente mais tarde!');
        history.push('/');
      })
      .finally(() => setDisabledButton(false));
  }

  function continueCourse() {
    history.push(`/estudo/${courseId}/topic/${lastTopicId}`);
  }

  return (
    <CourseDataWrapper height="190px" position="relative" top="-60px" padding="43px">
      <UserProgress>
        <UserAvatar className="avatar" user={user} size="55" />
        <Container flexDirection="column" alignItems="flex-start" margin="0 0 0 25px">
          <PlainText fontSize="1.2rem">
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
      <Button
        width="200px"
        onClick={hasStarted ? continueCourse : initCourse}
        disabledButton={disabledButton}
        height="55px"
      >
        {hasStarted ? 'Continuar curso >>' : 'Iniciar curso >>'}
      </Button>
    </CourseDataWrapper>
  );
}

const UserProgress = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  ${mediaQuery}{
    .avatar, .sb-avatar, .sb-avatar--text{
      display: none!important;
    }

    & > div{
      margin: inherit;
      width: 100%;
    }
  }
`;
