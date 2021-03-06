import React from 'react';
import styled, { css } from 'styled-components';

import mediaQuery from '../utils/mediaQuery';

export default function CourseDataWrapper(props) {
  const {
    children,
    height,
    position,
    top,
    padding,
    flexDirection,
    margin,
  } = props;

  return (
    <Wrapper
      height={height}
      position={position}
      top={top}
      padding={padding}
      flexDirection={flexDirection}
      margin={margin}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  font-family: 'Roboto';
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;

  ${(props) => (
    css`
      height: ${props.height || 'initial'};
      position: ${props.position || 'initial'};
      top: ${props.top};
      padding: ${props.padding || 0};
      flex-direction: ${props.flexDirection || 'row'};
      margin: ${props.margin || 'initial'};
    `
  )}

  ${mediaQuery} {
    padding: 25px;
    width: 95%;
  }

  @media(max-width: 450px){
    flex-direction: column;
  }
`;
