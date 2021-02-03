import React from 'react';
import styled from 'styled-components';

import {
  CourseInfoContainer, PlainText, CourseDataWrapper, Button,
} from '../../components';

export default function Course() {
  const titleBoxBackground = 'linear-gradient(180deg, #EFDA4F 0%, rgba(239, 218, 79, 0.56) 100%)';

  return (
    <>
      <CourseInfoContainer height="240px" background={titleBoxBackground} padding="50px 0">
        <PlainText fontSize="2.6rem" fontWeight="bold" marginBottom="15px">
          Javascript do zero!
        </PlainText>
        <PlainText fontSize="1.5rem">
          Aprenda JavaScript do zero ao avançado, com muita prática!
        </PlainText>
      </CourseInfoContainer>

      <CourseInfoContainer>
        <CourseDataWrapper height="150px" position="relative" top="-60px">
          <UserProgress>
            <Avatar />
            <span>Você não iniciou este curso ainda</span>
          </UserProgress>
          <Button width="180px">{'Iniciar curso >>'}</Button>
        </CourseDataWrapper>
      </CourseInfoContainer>
    </>
  );
}

const UserProgress = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: yellow;
  margin-right: 25px;
`;
