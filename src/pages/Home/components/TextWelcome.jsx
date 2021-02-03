import React from 'react';
import styled from 'styled-components';

export default function TitleNameUser({ alredyStartCourse }) {
  return (
    <Text>
      {
        alredyStartCourse
          ? 'Bem-vindo de volta! Continue seu curso atual abaixo 😀'
          : 'Você não começou nenhum curso ainda. Experimente um! 😀'
      }
    </Text>
  );
}

const Text = styled.div`
  font-weight: bold;
  margin: 3px 0px;
`;
