/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';
import Footer from './Footer';

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
  padding-bottom: 15px;
`;

const Box = styled.div`
  padding: 30px 25% 0 25%;
`;
