import React from 'react';
import styled from 'styled-components';

import Loading from './Loading';

export default function Button({
  onClick, type, disabledButton, children,
}) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabledButton}
    >
      {disabledButton
        ? <Loading />
        : children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${(props) => (props.disabled ? 'gray' : '#46A7D4')};
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
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
