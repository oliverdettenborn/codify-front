import React from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { Container, PlainText } from '../../../components';

export default function ClassWrapper() {
  return (
    <Container
      padding="20px"
      justifyContent="space-between"
      borderBottom="1px solid #E7E7E7"
      cursor="pointer"
    >
      <IoIosArrowDown size="1.6rem" color="#656565" />

      <PlainText
        color="#656565"
        fontSize="1.4rem"
        fontWeight="bold"
        margin="0 auto 0 15px"
        mediaQueryMargin="0"
      >
        Apresentação
      </PlainText>

      <PlainText
        color="#656565"
        fontSize="1.1rem"
        mediaQueryDisplay="none"
      >
        2 aulas • 5 exercícios
      </PlainText>
    </Container>
  );
}
