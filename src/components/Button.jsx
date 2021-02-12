import React from 'react';
import styled from 'styled-components';
import mediaQuery from '../utils/mediaQuery';

import Loading from './Loading';

export default function Button({
  onClick, type, disabledButton, children, background, width, height,
}) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabledButton}
      background={background || '#46A7D4'}
      width={width || '100%'}
      height={height || '50px'}
    >
      {disabledButton
        ? <Loading />
        : children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => (props.disabled ? 'gray' : props.background)};
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 5px;

  ${mediaQuery} {
    font-size: 1.2rem;
  }
`;
