import React from 'react';
import styled, { css } from 'styled-components';

export default function CourseInfoContainer(props) {
  const { children, background, height } = props;

  return (
    <Container background={background} height={height}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';

  ${(props) => (
    css`
      background: ${props.background || 'none'};
      height: ${props.height || 'initial'};
    `
  )}
`;
