import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../context/UserContext';
import CourseContext from '../../../context/CourseContext';

import { Button, TextLink } from '../../../components';
import mediaQuery from '../../../utils/mediaQuery';

export default function CourseBoxHorizontal({ course, titleBox }) {
  const {
    id, title, description, color, imageUrl,
  } = course;
  const history = useHistory();

  const [disabledButton, setDisabledButton] = useState(false);
  const { user } = useContext(UserContext);
  const { setCourse, setLastTopicId } = useContext(CourseContext);

  function continueCourse() {
    setDisabledButton(true);
    axios
      .get(`${process.env.REACT_APP_URL_API}/courses/${id}/chapters`, { headers: { Authorization: `Bearer ${user.token}` } })
      .then(((response) => {
        setCourse(response.data);
        setLastTopicId(response.data.lastTopicId);
        history.push(
          `/estudo/${response.data.id}/topic/${response.data.lastTopicId}`,
        );
      }))
      .catch(() => {
        setDisabledButton(false);
        alert('Ocorreu um erro ao carregar o curso, tente novamente mais tarde!');
      });
  }

  return (
    <Container>
      { titleBox && <Title>{titleBox}</Title>}
      <Course>
        <BoxImage color={color}>
          <img src={imageUrl} alt={title} />
        </BoxImage>
        <Details>
          <TitleCourse>{title}</TitleCourse>
          <Description>{description}</Description>
          <TextLink
            to={`/cursos/${course.id}`}
            text="Ver mais"
            color="#BBBBBB"
          />
        </Details>
        <Button
          width="215px"
          height="60px"
          disabledButton={disabledButton}
          onClick={continueCourse}
        >
          {'Continuar curso >>'}
        </Button>
      </Course>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 40px;
  color: #262626;
`;

const Course = styled.div`
  height: 180px;
  width: 100%;
  flex-grow: 1;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 0 20px 0 0;

  ${mediaQuery}{
    flex-direction: column;
  }
`;

const BoxImage = styled.div`
  width: 35%;
  height: 100%;
  background-color: ${(props) => props.color};
  border-radius: 20px 0 0 20px;

  img{
    width: 100%;
    height: 100%;
    border-radius: 20px 0 0 20px;
  }
`;

const Details = styled.div`
  padding: 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  flex-grow: 1;
`;

const TitleCourse = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
`;

const Description = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  color: #777777;
  margin-top: 8px;
`;
