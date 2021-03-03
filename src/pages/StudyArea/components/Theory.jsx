/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import getYoutubeID from 'get-youtube-id';
import Footer from './Footer';

export default function Theory(props) {
  const { theory, handleCheckboxChange, checked } = props;
  const id = getYoutubeID(`${theory.youtubeUrl}`);
  const [isPlaying, setIsPlaying] = useState(-1);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  function getYoutubeTime(event) {
    setVideoDuration(event.target.getDuration());
  }
  function getCurrentTime(event) {
    setCurrentTime(event.target.getCurrentTime());
    setIsPlaying(event.target.getPlayerState());
  }
  useEffect(() => {
    if (isPlaying === 0) {
      return handleCheckboxChange();
    }
    if (isPlaying === 2) {
      const percentageWatched = currentTime / videoDuration;
      if (percentageWatched >= 0.8 && !checked) {
        return handleCheckboxChange();
      }
    }
  }, [isPlaying]);
  useEffect(() => {
    setIsPlaying(-1);
    setVideoDuration(0);
    setCurrentTime(0);
  }, []);
  return (
    <Box>
      <Container>
        {
        theory.youtubeUrl
          ? (
            <YouTube
              videoId={id}
              onReady={getYoutubeTime}
              onStateChange={getCurrentTime}
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
