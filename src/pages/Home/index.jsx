import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

import {
  BannerWelcome, ListAllCourse, OngoingCourses, SuggestedCourses,
} from './components';

export default function Home() {
  const { user } = useContext(UserContext);
  const history = useHistory();

  // logica para ver se já começou ou não um curso
  const alredyStartCourse = false;

  if (!user.token) {
    history.push('/');
  }

  return (
    <>
      <BannerWelcome user={user} alredyStartCourse={alredyStartCourse} />
      <Container>
        {
          alredyStartCourse
            ? (
              <>
                <OngoingCourses user={user} />
                <SuggestedCourses user={user} />
              </>
            )
            : <ListAllCourse user={user} />
        }
      </Container>
    </>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 40px 10% 0 10%;
`;
