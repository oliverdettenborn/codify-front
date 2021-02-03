/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

import CourseBox from './CourseBox';
import { Loading } from '../../../components';

export default function TitleNameUser({
  courses, title, loading, showMessageWithEmptyArray,
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
              : courses.map((course) => <CourseBox course={course} />)
          )
      }
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 40px;
  color: #262626;
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
