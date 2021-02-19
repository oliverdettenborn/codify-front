import React from 'react';
import styled from 'styled-components';

export default function Exercise({ description }) {
  return (
    <Box>
      {description}
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  background: #FFF;
  height: 50vh;
`;
