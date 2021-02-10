import React from 'react';
import {
  CourseInfoContainer, PlainText, ButtonClickToBack,
} from '../../../components';

export default function Banner({ background, courseName, description }) {
  return (
    <CourseInfoContainer
      width="100%"
      height="240px"
      background={background}
      padding="50px 0"
      positionRelative
    >
      <ButtonClickToBack
        top="15px"
        left="15px"
        size="50"
        to="/home"
      />
      <PlainText fontSize="2.6rem" fontWeight="bold" margin=" 0 0 15px 0" color={(background === '0,0,0' && '#FFF')}>
        {courseName}
      </PlainText>

      <PlainText fontSize="1.5rem">
        {description}
      </PlainText>
    </CourseInfoContainer>
  );
}
