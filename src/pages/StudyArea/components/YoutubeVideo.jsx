import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import getYoutubeID from 'get-youtube-id';

export default function Youtubevideo({ link }) {
  const id = getYoutubeID(`${link}`);
  return (
    <Container>
      {
        link
          ? <YouTube videoId={id} />
          : 'Teoria ainda não foi cadastrada'
      }
    </Container>
  );
}
const Container = styled.div`
  padding-bottom: 15px;
`;
