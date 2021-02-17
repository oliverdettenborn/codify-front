import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import {
  CircleLines, CourseDropdown, Activity,
} from './components';
import { AlertDialog, Error, Loading } from '../../components';

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
  const [disabledButton, setDisabledButton] = useState(false);
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/topics/${topicId}/users`,
        { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => {
        setData([...response.data.theories, ...response.data.exercises]);
        setLoading(false);
      });
  }, [refresh, topicId, courseId]);

  if (loading) {
    return <Loading />;
  }

  function changeToNext() {
    if (indexActivity < data.length - 1) {
      setIndexActivity(indexActivity + 1);
    } else {
      setDisabledButton(true);
      setLastTopicId(topicId);
      axios
        .post(
          `${process.env.REACT_APP_URL_API}/users/topics/${topicId}/progress`,
          null,
          { headers: { Authorization: `Bearer ${user.token}` } },
        )
        .then((res) => {
          history.push(`/estudo/${courseId}/topic/${res.data.nextTopic}`);
        })
        .catch(() => {
          setErrorMessage('Você precisa concluir todas as atividades desse tópico para avançar para o próximo!');
          setAlertIsOpen(true);
        })
        .finally(() => setDisabledButton(false));
    }
  }

  return (
    <Background>
      {
        data.length === 0
          ? <Error>Esse tópico está indisponível, tente novamente mais tarde.</Error>
          : (
            <>
              <CourseDropdown topicId={topicId} courseId={courseId} />
              <CircleLines list={data} finished={data} setIndexActivity={setIndexActivity} />
              <Activity
                activity={data[indexActivity]}
                refresh={refresh}
                setRefresh={setRefresh}
                changeToNext={changeToNext}
                totalOfActivities={data.length}
                index={indexActivity}
                disabledButton={disabledButton}
              />
              <AlertDialog
                alertIsOpen={alertIsOpen}
                setAlertIsOpen={setAlertIsOpen}
                errorMessage={errorMessage}
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
  height: 100%;
  min-height: 100vh;
  width: 100vw;
`;
