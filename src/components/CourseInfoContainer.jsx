import React from 'react';
import styled, { css } from 'styled-components';

export default function CourseInfoContainer(props) {
  const {
    children,
    width,
    background,
    height,
    padding,
  } = props;

  return (
    <Container width={width} background={background} height={height} padding={padding}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto';

  ${(props) => (
    css`
      width: ${props.width};
      background: ${props.background || 'none'};
      height: ${props.height || 'initial'};
      padding: ${props.padding || 0};
    `
  )}
`;
