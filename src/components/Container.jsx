import React from 'react';
import styled from 'styled-components';

export default function Container({ children }) {
  return (
    <FlexContainer>
      {children}
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
