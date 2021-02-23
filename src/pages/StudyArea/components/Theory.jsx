import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import getYoutubeID from 'get-youtube-id';
import Footer from './Footer';

export default function Theory(props) {
  const {
    activity, refresh, setRefresh, changeToNext, index, totalOfActivities, disabledButton, theory,
  } = props;
  const id = getYoutubeID(`${theory.youtubeUrl}`);
  return (
    <>
      <Container>
        {
        theory.youtubeUrl
          ? <YouTube videoId={id} />
          : 'Teoria ainda não foi cadastrada'
      }
      </Container>
      <Footer
        activity={activity}
        refresh={refresh}
        setRefresh={setRefresh}
        changeToNext={changeToNext}
        index={index}
        totalOfActivities={totalOfActivities}
        disabledButton={disabledButton}
      />
    </>
  );
}
const Container = styled.div`
  padding-bottom: 15px;
`;
