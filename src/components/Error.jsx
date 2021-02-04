import React from 'react';
import styled from 'styled-components';

export default function Error({ children }) {
  return (
    <StyledError>
      {children}
    </StyledError>
  );
}

const StyledError = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Roboto', cursive;
  font-size: 14px;
  line-height: 16px;
  color: red;
  text-align: center;
`;
