import React from 'react';
import styled from 'styled-components';

import {
  CourseInfoContainer, PlainText, CourseDataWrapper, Button, Container,
} from '../../components';
import ClassWrapper from './components/ClassWrapper';

export default function Course() {
  const titleBoxBackground = 'linear-gradient(180deg, #EFDA4F 0%, rgba(239, 218, 79, 0.56) 100%)';

  return (
    <>
      <CourseInfoContainer width="100%" height="240px" background={titleBoxBackground} padding="50px 0">
        <PlainText fontSize="2.6rem" fontWeight="bold" margin=" 0 0 15px 0">
          Javascript do zero!
        </PlainText>
        <PlainText fontSize="1.5rem">
          Aprenda JavaScript do zero ao avançado, com muita prática!
        </PlainText>
      </CourseInfoContainer>

      <Container justifyContent="center" alignItems="center">
        <CourseInfoContainer width="80%" padding="0 80px">
          <CourseDataWrapper height="190px" position="relative" top="-60px" padding="40px">
            <UserProgress>
              <Avatar />
              <PlainText fontSize="1.3rem">Você não iniciou este curso ainda</PlainText>
            </UserProgress>
            <Button width="180px">{'Iniciar curso >>'}</Button>
          </CourseDataWrapper>

          <PlainText
            margin="0 0 25px 0"
            fontSize="1.8rem"
            alignSelf="flex-start"
          >
            Ementa
          </PlainText>

          <CourseDataWrapper flexDirection="column">
            <ClassWrapper />
            <ClassWrapper />
            <ClassWrapper />
            <ClassWrapper />
          </CourseDataWrapper>
        </CourseInfoContainer>
      </Container>
    </>
  );
}

const UserProgress = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: yellow;
  margin-right: 25px;
`;
