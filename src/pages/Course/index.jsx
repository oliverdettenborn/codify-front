import React, { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import {
  CourseInfoContainer, Container, Header,
} from '../../components';
import { Summary, Banner, UserInfo } from './components';
import UserContext from '../../context/UserContext';
import CourseContext from '../../context/CourseContext';

export default function Course() {
  const { user, setUser } = useContext(UserContext);
  const {
    courseName,
    description,
    color,
    chapters,
    setCourseId,
    refreshContext,
  } = useContext(CourseContext);
  const { id } = useParams();
  const history = useHistory();

  if (!user.token) {
    history.push('/');
  }

  useEffect(() => {
    setCourseId(id);
  }, [id, refreshContext]);

  return (
    <>
      <Header user={user} />
      <Banner
        background={color}
        courseName={courseName}
        description={description}
      />
      <Container justifyContent="center" alignItems="center">
        <CourseInfoContainer width="80%" padding="0 80px">
          <UserInfo
            user={user}
            setUser={setUser}
            courseId={id}
            chapters={chapters}
          />
          <Summary chapters={chapters} courseId={id} />
        </CourseInfoContainer>
      </Container>
    </>
  );
}
