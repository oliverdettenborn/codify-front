import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

export default function Exercise(props) {
  return (
    <>
      <Box>
        Teste
      </Box>
      <Footer {...props} />
    </>
  );
}

const Box = styled.div`
  width: 100%;
  background: #FFF;
  height: 50vh;
`;
