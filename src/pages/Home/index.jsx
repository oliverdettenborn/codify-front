import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

import { Header } from '../../components';
import {
  BannerWelcome, ListAllCourse, OngoingCourses, SuggestedCourses,
} from './components';

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  if (!user.token) {
    history.push('/');
  }

  return (
    <>
      <Header user={user} />
      <BannerWelcome user={user} alredyStartCourse={user.hasInitAnyCourse} />
      <Container>
        {
          user.hasInitAnyCourse
            ? (
              <>
                <OngoingCourses user={user} />
                <SuggestedCourses user={user} />
              </>
            )
            : <ListAllCourse user={user} setUser={setUser} />
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
