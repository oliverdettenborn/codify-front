import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function TitleNameUser({ course }) {
  const {
    id, title, description, color, imageUrl,
  } = course;
  return (
    <Link to={`/cursos/${id}`} target="_blank">
      <Container>
        <BoxImage color={color}>
          <img src={imageUrl} alt={title} />
        </BoxImage>
        <Details>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Details>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  height: 315px;
  width: 280px;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const BoxImage = styled.div`
  width: 100%;
  height: 55%;
  background-color: ${(props) => props.color};
  border-radius: 20px 20px 0 0;

  img{
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

const Details = styled.div`
  padding: 25px;
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h3`
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
