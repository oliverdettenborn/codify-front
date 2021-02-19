import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import {
  CircleLines, CourseDropdown, Activity,
} from './components';
import { AlertDialog, Loading } from '../../components';

import UserContext from '../../context/UserContext';
import CourseContext from '../../context/CourseContext';

export default function StudyArea() {
  const { topicId, courseId } = useParams();
  const { user } = useContext(UserContext);
  const { setLastTopicId, refreshContext, setRefreshContext } = useContext(CourseContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [indexActivity, setIndexActivity] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);
  const [refreshCheckBox, setRefreshCheckBox] = useState(false);
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
  }, [refreshCheckBox, refreshContext, topicId, courseId]);

  useEffect(() => {
    setIndexActivity(0);
  }, [topicId]);

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
          setRefreshContext(!refreshContext);
        })
        .catch(() => {
          setErrorMessage('Ocorreu um erro ao finalizar esse tópico, tente novamente mais tarde!');
          setAlertIsOpen(true);
        })
        .finally(() => setDisabledButton(false));
    }
  }

  return (
    <Background>
      <CourseDropdown
        topicId={topicId}
        courseId={courseId}
        showOnlyButtonBack={data.length === 0}
        refreshContext={refreshContext}
      />
      {
        data.length === 0
          ? <Message>Esse tópico está indisponível, tente novamente mais tarde.</Message>
          : (
            <>
              <CircleLines list={data} finished={data} setIndexActivity={setIndexActivity} />
              <Activity
                activity={data[indexActivity]}
                refresh={refreshCheckBox}
                setRefresh={setRefreshCheckBox}
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

const Message = styled.h3`
  text-align: center;
  color: white;
  padding: 100px;
`;
