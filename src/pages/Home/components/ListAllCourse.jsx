import React from 'react';
import styled from 'styled-components';

import CourseBox from './CourseBox';

export default function TitleNameUser() {
  const courses = [
    {
      id: 1,
      title: 'JavaScript do zero!',
      description: 'Aprenda JavaScript do zero ao avançado, com muita prática!',
      color: '#EFDA4F',
      imageUrl: 'https://img.ibxk.com.br/2020/01/30/30021141299110.jpg?w=1120&h=420&mode=crop&scale=both',
    },
    {
      id: 2,
      title: 'JavaScript do zero!',
      description: 'Aprenda JavaScript do zero ao avançado, com muita prática!',
      color: '#EFDA4F',
      imageUrl: '/assets/course-model.png',
    },
    {
      id: 3,
      title: 'JavaScript do zero!',
      description: 'Aprenda JavaScript do zero ao avançado, com muita prática!',
      color: '#EFDA4F',
      imageUrl: '/assets/course-model.png',
    },
    {
      id: 4,
      title: 'JavaScript do zero!',
      description: 'Aprenda JavaScript do zero ao avançado, com muita prática!',
      color: '#EFDA4F',
      imageUrl: '/assets/course-model.png',
    },
    {
      id: 5,
      title: 'JavaScript do zero!',
      description: 'Aprenda JavaScript do zero ao avançado, com muita prática!',
      color: '#EFDA4F',
      imageUrl: '/assets/course-model.png',
    },
    {
      id: 6,
      title: 'JavaScript do zero!',
      description: 'Aprenda JavaScript do zero ao avançado, com muita prática!',
      color: '#EFDA4F',
      imageUrl: '/assets/course-model.png',
    },
    {
      id: 7,
      title: 'JavaScript do zero!',
      description: 'Aprenda JavaScript do zero ao avançado, com muita prática!',
      color: '#EFDA4F',
      imageUrl: '/assets/course-model.png',
    },
    {
      id: 8,
      title: 'JavaScript do zero!',
      description: 'Aprenda JavaScript do zero ao avançado, com muita prática!',
      color: '#EFDA4F',
      imageUrl: '/assets/course-model.png',
    },
  ];
  return (
    <Container>
      {courses.map((course) => <CourseBox course={course} />)}
    </Container>
  );
}

const Container = styled.div`
  width: 85%;
  margin: 40px auto 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
