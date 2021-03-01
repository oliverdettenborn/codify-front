import React, { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UserContext from '../../../context/UserContext';

import Theory from './Theory';
import Exercise from './Exercise';

export default function Activity(props) {
  const {
    activity, index, setChecked, checked, refresh, setRefresh,
  } = props;
  const { user } = useContext(UserContext);

  const id = activity.theoryId || activity.exerciseId;
  const type = index === 0 ? 'theories' : 'exercises';

  function handleCheckboxChange(code = '') {
    setChecked(!checked);
    const data = type === 'exercises' ? { solutionUser: code } : null;
    axios
      .post(
        `${process.env.REACT_APP_URL_API}/users/${type}/${id}/progress`,
        data,
        { headers: { Authorization: `Bearer ${user.token}` } },
      )
      .then(() => setRefresh(!refresh));
  }

  return (
    <Container>
      {activity && index === 0 && activity.youtubeUrl
        ? (
          <Theory
            id={id}
            type={type}
            theory={activity}
            handleCheckboxChange={handleCheckboxChange}
            {...props}
          />
        )
        : (
          <Exercise
            exercise={activity}
            handleCheckboxChange={handleCheckboxChange}
            {...props}
          />
        )}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
