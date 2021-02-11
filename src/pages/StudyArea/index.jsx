import React from 'react';
import styled from 'styled-components';
import {
  CircleLines, YoutubeVideo, Checkbox, CourseDropdown,
} from './components';
import { Button } from '../../components';

export default function StudyArea() {
  return (
    <>
      <CourseDropdown />
      <CircleLines />
      <YoutubeVideo>
        <Container>
          <Checkbox />
          <Button width="25%" height="30px" fontsize="15px" borderRadius="8px">{'Avançar >>'}</Button>
        </Container>
      </YoutubeVideo>
    </>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 48vw;
  height: 50px;
  padding: 0px 5px;
`;
