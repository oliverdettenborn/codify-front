import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components';

import YoutubeVideo from './YoutubeVideo';
import Exercise from './Exercise';
import Checkbox from './Checkbox';

export default function Activity(props) {
  const {
    activity, refresh, setRefresh, changeToNext, index, totalOfActivities, disabledButton,
  } = props;
  return (
    <Container>
      {activity && activity.youtubeUrl
        ? <YoutubeVideo link={activity.youtubeUrl} />
        : <Exercise description={activity.description} />}
      <Footer>
        <Checkbox
          id={activity.theoryId || activity.exerciseId}
          userHasFinished={activity.userHasFinished}
          refresh={refresh}
          setRefresh={setRefresh}
          type={index === 0 ? 'theories' : 'exercises'}
        />
        <Button
          onClick={changeToNext}
          disabledButton={disabledButton}
          width="25%"
          height="30%!important"
          fontsize="15px"
          borderRadius="8px"
        >
          {
            (index === (totalOfActivities - 1))
              ? 'Finalizar o tópico >>'
              : 'Avançar >>'
          }
        </Button>
      </Footer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 30px 25% 0 25%;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;
