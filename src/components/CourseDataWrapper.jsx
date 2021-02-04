import React from 'react';
import styled, { css } from 'styled-components';

export default function CourseDataWrapper(props) {
  const {
    children,
    height,
    position,
    top,
  } = props;

  return (
    <Wrapper height={height} position={position} top={top}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0 40px;
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
      top: ${props.top}
    `
  )}
`;
