import React from 'react';
import styled from 'styled-components';

export default function BoxBackground({ children }) {
  return (
    <Background>
      {children}
    </Background>
  );
}

const Background = styled.div`
    background-image: url('/assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
`;
