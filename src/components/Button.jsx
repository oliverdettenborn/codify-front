import React from 'react';
import styled from 'styled-components';
import mediaQuery from '../utils/mediaQuery';

import Loading from './Loading';

export default function Button({
  onClick, type, disabledButton, children,
  background, width, height, fontsize, borderRadius, padding, marginRight,
}) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabledButton}
      background={background || '#46A7D4'}
      width={width || '100%'}
      height={height || '50px'}
      fontsize={fontsize || '20px'}
      borderRadius={borderRadius || '6px'}
      padding={padding || '0px'}
      marginRight={marginRight}
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
  font-size: ${(props) => (props.fontsize)};
  font-weight: bold;
  line-height: 28px;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : '0px')};
  text-align: center;
  outline: none;
  padding: ${(props) => (props.padding)};
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => (props.borderRadius)};
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaQuery} {
    font-size: 1.2rem;
  }
`;
