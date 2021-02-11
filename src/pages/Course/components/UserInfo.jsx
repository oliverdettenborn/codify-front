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
        console.log(r.data);
        setProgress(r.data.progress);
      })
      .catch((err) => console.warn(err.response));
  }, []);

  return (
    <>
      <CourseDataWrapper height="190px" position="relative" top="-60px" padding="40px">
        <UserProgress>
          <UserAvatar user={user} size="65" />
          <Container flexDirection="column" alignItems="flex-start" margin="0 0 0 25px">
            <PlainText fontSize="1rem">Você não iniciou este curso ainda</PlainText>

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
