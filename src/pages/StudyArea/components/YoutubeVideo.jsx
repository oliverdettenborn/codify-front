import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import getYoutubeID from 'get-youtube-id';

export default function Youtubevideo({ link }) {
  const id = getYoutubeID(`${link}`);
  return (
    <Container>
      <YouTube videoId={id} />
    </Container>
  );
}
const Container = styled.div`
  padding-bottom: 15px;
`;
