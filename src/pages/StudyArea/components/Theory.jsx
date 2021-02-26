import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import getYoutubeID from 'get-youtube-id';
import Footer from './Footer';

export default function Theory(props) {
  const { theory } = props;
  const id = getYoutubeID(`${theory.youtubeUrl}`);
  return (
    <Box>
      <Container>
        {
        theory.youtubeUrl
          ? <YouTube videoId={id} />
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
