import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import {
  CircleLines, CourseDropdown, Activity,
} from './components';
import { Error, Loading } from '../../components';
import UserContext from '../../context/UserContext';
import CourseContext from '../../context/CourseContext';

export default function StudyArea() {
  const { topicId, courseId } = useParams();
  const { user } = useContext(UserContext);
  const { setLastTopicId } = useContext(CourseContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [indexActivity, setIndexActivity] = useState(0);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/topics/${topicId}/users/${user.userId}`,
        { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => {
        setData([...response.data.theories, ...response.data.exercises]);
        setLoading(false);
      });
  }, [refresh]);

  if (loading) {
    return <Loading />;
  }

  function changeToNext() {
    if (indexActivity < data.length) {
      setIndexActivity(indexActivity + 1);
    } else {
      setLastTopicId(topicId);
      alert('Tópico finalizado');
      axios
        .post(
          `${process.env.REACT_APP_URL_API}/users/${user.userId}/topics/${topicId}/progress`,
          null,
          { headers: { Authorization: `Bearer ${user.token}` } },
        )
        .then(() => {
          history.push(`/cursos/${courseId}`);
        });
    }
  }

  return (
    <Background>
      {
        data.length === 0
          ? <Error>Esse tópico está indisponível, tente novamente mais tarde.</Error>
          : (
            <>
              <CourseDropdown />
              <CircleLines list={data} finished={data} />
              <Activity
                activity={data[indexActivity]}
                refresh={refresh}
                setRefresh={setRefresh}
                changeToNext={changeToNext}
                totalOfActivities={data.length}
                index={indexActivity}
              />
            </>
          )
      }
    </Background>
  );
}

const Background = styled.div`
  background: #3d3d3d;
  width: 100vw;
  height: 100vh;
`;
