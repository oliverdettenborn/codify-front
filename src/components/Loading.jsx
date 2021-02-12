import React from 'react';
import styled from 'styled-components';

export default function Loading() {
  return <Image src="/assets/loading.gif" alt="Carregando" />;
}

const Image = styled.img`
  height: 100%;
  margin: auto;
  text-align: center;
`;
