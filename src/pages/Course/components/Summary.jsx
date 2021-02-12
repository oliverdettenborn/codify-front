import React from 'react';
import styled from 'styled-components';

import { Accordion } from '@chakra-ui/react';
import { PlainText } from '../../../components';
import ItemAccordion from './ItemAccordion';

export default function Course({ chapters }) {
  return (
    <>
      <PlainText
        margin="0 0 25px 20px"
        fontSize="1.8rem"
        alignSelf="flex-start"
      >
        Ementa
      </PlainText>
      <BoxWhite>
        <Accordion defaultIndex={[0]} allowMultiple>
          {
            chapters.map((chapter) => <ItemAccordion chapter={chapter} key={chapter.id} />)
          }
        </Accordion>
      </BoxWhite>
    </>
  );
}

const BoxWhite = styled.div`
  margin-bottom: 50px;
  width: 100%;
  font-family: 'Roboto';
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;
