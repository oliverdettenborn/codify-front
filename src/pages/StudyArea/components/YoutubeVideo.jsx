import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import getYoutubeID from 'get-youtube-id';

export default function Youtubevideo({ children }) {
  const id = getYoutubeID('https://www.youtube.com/watch?v=jvHY_Ous2D4&ab_channel=KingSwish');
  return (
    <Container>
      <YouTube videoId={id} />
      {children}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #3d3d3d;
  height: 77vh;
`;
