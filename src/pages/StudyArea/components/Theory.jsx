/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';
import Footer from './Footer';

import media from '../../../utils/mediaQuery';

export default function Theory(props) {
  const { theory, handleCheckboxChange, checked } = props;
  const [totalDuration, setTotalDuration] = useState(0);
  function checkProgress(event) {
    if (event.playedSeconds / totalDuration >= 0.8 && !checked) {
      handleCheckboxChange();
    }
  }
  return (
    <Box>
      <Container>
        {
        theory.youtubeUrl
          ? (
            <ReactPlayer
              url={theory.youtubeUrl}
              controls
              onProgress={checkProgress}
              onDuration={(duration) => setTotalDuration(duration)}
              width="100%"
            />
          )
          : 'Teoria ainda não foi cadastrada'
      }
      </Container>
      <Footer {...props} />
    </Box>
  );
}
const Container = styled.div`
  padding-bottom: 5px;
`;

const Box = styled.div`
  padding-top: 20px;
  width: 50%;
  height: 500px;
  flex-grow: 1;
  padding-bottom: 35px;
  overflow: hidden;
  
  .player-wrapper {
    position: relative;
    padding-top: 56.25%;
  }
.react-player {
  position: absolute;
  top: 0;
  left: 0;
}
  ${media}{
    width: 95%;
  }
`;
