import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import {
  CourseInfoContainer, PlainText, CourseDataWrapper, Button, Container,
} from '../../components';
import ClassWrapper from './components/ClassWrapper';
import UserContext from '../../context/UserContext';

export default function Course() {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const { user } = useContext(UserContext);
  const { id } = useParams();

  const convertToRgba = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    setColor(`${r}, ${g}, ${b}`);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/courses/${id}`, { headers: { Authorization: `Bearer ${user.token}` } })
      .then((r) => {
        setCourseName(r.data.title);
        setDescription(r.data.description);
        convertToRgba(r.data.color);
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <>
      <CourseInfoContainer width="100%" height="240px" background={color} padding="50px 0">
        <PlainText fontSize="2.6rem" fontWeight="bold" margin=" 0 0 15px 0">
          {courseName}
        </PlainText>

        <PlainText fontSize="1.5rem">
          {description}
        </PlainText>
      </CourseInfoContainer>

      <Container justifyContent="center" alignItems="center" padding="0 0 0 20px">
        <CourseInfoContainer width="80%" padding="0 80px">
          <CourseDataWrapper height="190px" position="relative" top="-60px" padding="40px">
            <UserProgress>
              <Avatar />
              <PlainText fontSize="1.3rem">Você não iniciou este curso ainda</PlainText>
            </UserProgress>
            <Button width="180px">{'Iniciar curso >>'}</Button>
          </CourseDataWrapper>

          <PlainText
            margin="0 0 25px 0"
            fontSize="1.8rem"
            alignSelf="flex-start"
          >
            Ementa
          </PlainText>

          <CourseDataWrapper flexDirection="column">
            <ClassWrapper />
            <ClassWrapper />
            <ClassWrapper />
            <ClassWrapper />
          </CourseDataWrapper>
        </CourseInfoContainer>
      </Container>
    </>
  );
}

const UserProgress = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: yellow;
  margin-right: 25px;
  flex-shrink: 0;
`;
