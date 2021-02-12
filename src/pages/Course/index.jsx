import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import hexRgb from 'hex-rgb';

import {
  CourseInfoContainer, Container, Header,
} from '../../components';
import { Summary, Banner, UserInfo } from './components';
import UserContext from '../../context/UserContext';
import CourseContext from '../../context/CourseContext';

export default function Course() {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [chapters, setChapters] = useState([]);
  const { user } = useContext(UserContext);
  const { setCourse, setLastTopic } = useContext(CourseContext);
  const { id } = useParams();
  const history = useHistory();

  if (!user.token) {
    history.push('/');
  }

  function saveCourseInformations(response) {
    const course = response.data;
    setCourseName(course.title);
    setDescription(course.description);
    setColor(hexRgb(course.color, { format: 'array' }).slice(0, 3).join());
    setChapters(course.chapters);
    setCourse(course);
    let last = course.chapters[0].topics[0];
    course.chapters.forEach((chapter) => {
      chapter.topics.forEach((topic) => {
        const topicIsFinish = topic.topicUsers.length > 0;
        if (topicIsFinish) {
          last = topic;
        }
      });
    });
    setLastTopic(last);
  }
  console.log(chapters);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/courses/${id}/chapters`, { headers: { Authorization: `Bearer ${user.token}` } })
      .then(saveCourseInformations)
      .catch(() => {
        alert('Ocorreu um erro ao carregar o curso, tente novamente mais tarde!');
        history.push('/home');
      });
  }, []);

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
          <UserInfo user={user} courseId={id} chapters={chapters} />
          <Summary chapters={chapters} />
        </CourseInfoContainer>
      </Container>
    </>
  );
}
