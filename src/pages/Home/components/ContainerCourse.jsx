/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

import CourseBox from './CourseBox';
import { Loading } from '../../../components';

export default function ContainerCouse({
  courses, title, loading, showMessageWithEmptyArray, haveContinueButton,
}) {
  return (
    <>
      { title && <Title>{title}</Title>}
      <Container>
        {
        loading
          ? <Loading />
          : (
            (courses.length === 0)
                ? showMessageWithEmptyArray && <Message> Nenhum curso encontrado</Message>
                : courses.map((course) => (
                  <CourseBox
                    course={course}
                    haveContinueButton={haveContinueButton}
                  />
                ))
          )
      }
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 1.7rem;
  line-height: 2rem;
  color: #262626;
  margin-bottom: 20px;
`;

const Message = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 22px;
  line-height: 24px;
  color: #262626;
`;
