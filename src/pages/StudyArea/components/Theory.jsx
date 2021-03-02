import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import getYoutubeID from 'get-youtube-id';
import Footer from './Footer';

import media from '../../../utils/mediaQuery';

export default function Theory(props) {
  const { theory } = props;
  const id = getYoutubeID(`${theory.youtubeUrl}`);

  const opts = {
    height: '300px',
    width: '600px',
    maxWidth: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <Box>
      <Container>
        {
        theory.youtubeUrl
          && <YouTube videoId={id} opts={opts} />
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

  ${media}{
    padding: 0;
    margin-top: 40px;

    iframe{
      width: 100%;
      height: 215px;
    }

    & #player{
      width: 100%;
      height: 215px;
    }
  }
`;
