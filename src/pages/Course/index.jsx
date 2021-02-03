import React from 'react';

import {
  CourseInfoContainer, PlainText,
} from '../../components';

export default function Course() {
  const titleBoxBackground = 'linear-gradient(180deg, #EFDA4F 0%, rgba(239, 218, 79, 0.56) 100%)';

  return (
    <>
      <CourseInfoContainer height="220px" background={titleBoxBackground}>
        <PlainText fontSize="2.6rem" fontWeight="bold" marginBottom="15px">
          Javascript do zero!
        </PlainText>
        <PlainText fontSize="1.5rem">
          Aprenda JavaScript do zero ao avançado, com muita prática!
        </PlainText>
      </CourseInfoContainer>

      <CourseInfoContainer>
        <h1>Olá</h1>
      </CourseInfoContainer>
    </>
  );
}
