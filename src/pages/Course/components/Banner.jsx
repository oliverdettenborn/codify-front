import React from 'react';
import {
  CourseInfoContainer, PlainText,
} from '../../../components';

export default function Banner({ background, courseName, description }) {
  console.log(background);
  return (
    <>
      <CourseInfoContainer width="100%" height="240px" background={background} padding="50px 0">
        <PlainText fontSize="2.6rem" fontWeight="bold" margin=" 0 0 15px 0" color={(background === '0,0,0' && '#FFF')}>
          {courseName}
        </PlainText>

        <PlainText fontSize="1.5rem">
          {description}
        </PlainText>
      </CourseInfoContainer>
    </>
  );
}
