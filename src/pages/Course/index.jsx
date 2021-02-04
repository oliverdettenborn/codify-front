import React from 'react';
import styled from 'styled-components';

import {
  CourseInfoContainer, PlainText, CourseDataWrapper, Button, Container,
} from '../../components';

export default function Course() {
  const titleBoxBackground = 'linear-gradient(180deg, #EFDA4F 0%, rgba(239, 218, 79, 0.56) 100%)';

  return (
    <>
      <CourseInfoContainer width="100%" height="240px" background={titleBoxBackground} padding="50px 0">
        <PlainText fontSize="2.6rem" fontWeight="bold" marginBottom="15px">
          Javascript do zero!
        </PlainText>
        <PlainText fontSize="1.5rem">
          Aprenda JavaScript do zero ao avançado, com muita prática!
        </PlainText>
      </CourseInfoContainer>

      <Container>
        <CourseInfoContainer width="80%" padding="0 80px">
          <CourseDataWrapper height="190px" position="relative" top="-60px">
            <UserProgress>
              <Avatar />
              <PlainText fontSize="1.3rem">Você não iniciou este curso ainda</PlainText>
            </UserProgress>
            <Button width="180px">{'Iniciar curso >>'}</Button>
          </CourseDataWrapper>

          <PlainText
            marginBottom="15px"
            fontSize="1.8rem"
            fontWeight="bold"
            alignSelf="flex-start"
          >
            Ementa
          </PlainText>

          <CourseDataWrapper>
            <h1>Teste</h1>
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
