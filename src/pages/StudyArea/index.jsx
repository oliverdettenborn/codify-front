import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  CircleLines, YoutubeVideo, Checkbox, CourseDropdown, Exercise,
} from './components';
import { Button } from '../../components';
import UserContext from '../../context/UserContext';

export default function StudyArea() {
  const { topicId } = useParams();
  const { user } = useContext(UserContext);
  const [data, setData] = useState(false);
  const [topicType, setTopicType] = useState('theory');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/topics/${topicId}/users/${user.userId}`, { headers: { Authorization: `Bearer ${user.token}` } }).then((response) => {
      setData([...response.data.theories, ...response.data.exercises]);
    });
  }, []);
  return (
    <>
      <CourseDropdown />
      {data && <CircleLines list={data} finished={data} /> }
      {data && (
        topicType === 'theory'
          ? (
            <YoutubeVideo link={data[0].youtubeUrl}>
              <Container>
                <Checkbox theoryId={data[0].theoryId} />
                <Button onClick={() => setTopicType('Exercise')} width="25%" height="30px" fontsize="15px" borderRadius="8px">{'Avançar >>'}</Button>
              </Container>
            </YoutubeVideo>
          )
          : <Exercise description={data[1].description} />
      )}
    </>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 48vw;
  height: 50px;
  padding: 0px 5px;
`;
