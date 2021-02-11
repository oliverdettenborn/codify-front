import React from 'react';
import styled, { css } from 'styled-components';
import mediaQuery from '../utils/mediaQuery';

export default function CourseInfoContainer(props) {
  const {
    children,
    width,
    background,
    height,
    padding,
    positionRelative,
  } = props;

  return (
    <Container
      width={width}
      background={background}
      height={height}
      padding={padding}
      positionRelative={positionRelative}
    >
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
      background: ${`linear-gradient(180deg, rgba(${props.background}, 1), rgba(${props.background}, 0.3))` || 'red'};
      height: ${props.height || 'initial'};
      padding: ${props.padding || 0};
      position: ${props.positionRelative ? 'relative' : 'initial'};
    `
  )}
  ${mediaQuery}{
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
