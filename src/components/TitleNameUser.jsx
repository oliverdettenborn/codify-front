import React from 'react';
import styled from 'styled-components';

export default function TitleNameUser({ name }) {
  return (
    <Text>
      {`Olá, ${name}!`}
    </Text>
  );
}

const Text = styled.div`
  margin: 3px 0px;
`;
