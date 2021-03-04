import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import CourseContext from '../../../context/CourseContext';

import { Button, TextLink } from '../../../components';
import mediaQuery from '../../../utils/mediaQuery';

export default function CourseBoxHorizontal({ course, titleBox }) {
  const {
    id, title, description, color, imageUrl, nextTopicId,
  } = course;
  const { setCourseId } = useContext(CourseContext);
  const history = useHistory();

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
            to={`/cursos/${id}`}
            text="Ver mais"
            color="#BBBBBB"
          />
        </Details>
        <Button
          width="215px"
          height="60px"
          onClick={() => {
            setCourseId(id);
            history.push(`/estudo/${id}/topic/${nextTopicId}`);
          }}
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
  font-size: 1.7rem;
  line-height: 2rem;
  color: #262626;
  margin-bottom: 20px;

  ${mediaQuery}{
    font-size: 1.6rem;
    margin-bottom: 5px;
  }
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
    height: 330px;
    padding: inherit;
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

  ${mediaQuery}{
    width: 100%;
    height: 175px;

    img{
      border-radius: 20px 20px 0px 0px;
    }
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

  ${mediaQuery}{
    padding: 5px 25px;

    h6{
      margin: 0;
    }
  }
`;

const TitleCourse = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #000000;

  ${mediaQuery}{
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

const Description = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  color: #777777;
  margin-top: 8px;

  ${mediaQuery}{
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;
