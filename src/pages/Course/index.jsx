import React from 'react';

import {
  CourseInfoContainer, PlainText,
} from '../../components';

export default function Course() {
  return (
    <CourseInfoContainer>
      <PlainText fontSize="2.6rem" fontWeight="bold" marginBottom="15px">
        Javascript do zero!
      </PlainText>
      <PlainText fontSize="1.5rem">
        Aprenda JavaScript do zero ao avançado, com muita prática!
      </PlainText>
    </CourseInfoContainer>
  );
}
