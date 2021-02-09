import React from 'react';

import {
  PlainText, CourseDataWrapper,
} from '../../../components';
import Accordion from './Accordion';

export default function Course() {
  return (
    <>
      <PlainText
        margin="0 0 25px 0"
        fontSize="1.8rem"
        alignSelf="flex-start"
      >
        Ementa
      </PlainText>

      <CourseDataWrapper flexDirection="column">
        <Accordion />
      </CourseDataWrapper>
    </>
  );
}
