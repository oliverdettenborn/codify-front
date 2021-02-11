import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import hexRgb from 'hex-rgb';

import {
  CourseInfoContainer, Container, Header,
} from '../../components';
import { Summary, Banner, UserInfo } from './components';
import UserContext from '../../context/UserContext';

export default function Course() {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [chapters, setChapters] = useState([]);
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const history = useHistory();

  if (!user.token) {
    history.push('/');
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/courses/${id}`, { headers: { Authorization: `Bearer ${user.token}` } })
      .then((r) => {
        setCourseName(r.data.title);
        setDescription(r.data.description);
        setColor(hexRgb(r.data.color, { format: 'array' }).slice(0, 3).join());
        setChapters(r.data.chapters);
      })
      .catch(() => history.push('/home'));
  }, []);
  console.log(chapters);

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
          <UserInfo user={user} courseId={id} />
          <Summary />
        </CourseInfoContainer>
      </Container>
    </>
  );
}
