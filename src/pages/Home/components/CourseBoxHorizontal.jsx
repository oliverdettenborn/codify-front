import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function CourseBoxHorizontal({ course, titleBox }) {
  const {
    id, title, description, color, imageUrl,
  } = course;
  return (
    <Container>
      { titleBox && <Title>{titleBox}</Title>}
      <Link to={`/cursos/${id}`} target="_blank">
        <Course>
          <BoxImage color={color}>
            <img src={imageUrl} alt={title} />
          </BoxImage>
          <Details>
            <TitleCourse>{title}</TitleCourse>
            <Description>{description}</Description>
          </Details>
        </Course>
      </Link>
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
  height: 200px;
  width: 100%;
  flex-grow: 1;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  font-family: 'Roboto';
  display: flex;
  margin: 20px 0;
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
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
