import React from 'react';
import styled from 'styled-components';

export default function CourseInfoContainer({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 220px;
  background: linear-gradient(180deg, #EFDA4F 0%, rgba(239, 218, 79, 0.56) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`;
