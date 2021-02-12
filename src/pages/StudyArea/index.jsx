import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  CircleLines, YoutubeVideo, Checkbox, CourseDropdown,
} from './components';
import { Button } from '../../components';
import UserContext from '../../context/UserContext';

export default function StudyArea() {
  const { topicId } = useParams();
  const { user } = useContext(UserContext);
  const [data, setData] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/topics/${topicId}/users/${user.userId}`).then((response) => {
      // eslint-disable-next-line max-len
      setData([...response.data.theories, ...response.data.exercises]);
      console.log(response);
    });
  }, []);
  console.log(data);
  // console.log(data, 'esse é o data');
  // function onSubmit(e) {
  //   e.preventDefault();
  //   setDisabledButton(true);
  //   axios.post(`${process.env.REACT_APP_URL_API}/users/register`, {
  //     name, email, password, passwordConfirmation: repeatPassword,
  //   }).then(() => history.push('/'));
  // }
  return (
    <>
      <CourseDropdown />
      {data && <CircleLines list={data} finished={data} /> }
      {data && (
      <YoutubeVideo link={data[0].youtubeUrl}>
        <Container>
          <Checkbox />
          <Button width="25%" height="30px" fontsize="15px" borderRadius="8px">{'Avançar >>'}</Button>
        </Container>
      </YoutubeVideo>
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
