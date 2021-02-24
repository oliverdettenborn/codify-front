import React from 'react';
import styled from 'styled-components';

import Theory from './Theory';
import Exercise from './Exercise';

export default function Activity(props) {
  const { activity, index } = props;

  return (
    <Container>
      {activity && index === 0 && activity.youtubeUrl
        ? <Theory theory={activity} {...props} />
        : <Exercise exercise={activity} {...props} />}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
