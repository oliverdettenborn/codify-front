import React from 'react';
import styled from 'styled-components';

import {
  PlainText, CourseDataWrapper, Button, UserAvatar,
} from '../../../components';

export default function Course({ user }) {
  return (
    <>
      <CourseDataWrapper height="190px" position="relative" top="-60px" padding="40px">
        <UserProgress>
          <UserAvatar user={user} size="65" />
          <PlainText fontSize="1.3rem" margin="0 15px">Você não iniciou este curso ainda</PlainText>
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
