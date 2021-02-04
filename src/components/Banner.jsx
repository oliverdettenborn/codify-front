import React from 'react';
import styled from 'styled-components';

import media from '../utils/mediaQuery';

export default function Banner({ children }) {
  return (
    <Container>
      { children }
    </Container>
  );
}

const Container = styled.aside`
  width: 100%;
  height: 120px;
  background: #46A7D4;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 40px;

  ${media}{
    font-size: 18px;
    line-height: 24px;
    padding: 10px 15px;
  }
`;
