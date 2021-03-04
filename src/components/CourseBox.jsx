import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from './Button';

import media from '../utils/mediaQuery';

export default function TitleNameUser({ course, haveContinueButton }) {
  const {
    id, title, description, color, imageUrl, nextTopicId,
  } = course;
  const history = useHistory();
  const routeContinue = nextTopicId
    ? `/estudo/${id}/topic/${nextTopicId}`
    : `/cursos/${id}`;

  return (
    <Container
      haveContinueButton={haveContinueButton}
      onClick={(e) => {
        e.stopPropagation();
        history.push(`/cursos/${id}`);
      }}
    >
      <BoxImage color={color}>
        <img src={imageUrl} alt={title} />
      </BoxImage>
      <Details>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Details>
      {
        haveContinueButton && (
          <Button
            width="90%"
            height="40px"
            fontsize="0.85rem"
            borderRadius="10px"
            padding="5px"
            onClick={(e) => {
              e.stopPropagation();
              history.push(routeContinue);
            }}
          >
            {'Continuar Curso >>'}
          </Button>
        )
      }
    </Container>
  );
}

const Container = styled.div`
  height: ${(props) => (props.haveContinueButton ? '340px' : '300px')};
  width: 240px;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;

  ${media}{
    width: 100%;
    height: ${(props) => (props.haveContinueButton ? '330px' : '280px')};
  }

  button{
    position: absolute;
    bottom: 5px;
  }
`;

const BoxImage = styled.div`
  width: 100%;
  height: 175px;
  background-color: ${(props) => props.color};
  border-radius: 20px 20px 0 0;
  position: absolute;
  top: 0;
  left: 0;

  img{
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

const Details = styled.div`
  padding: 0px 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 185px;
  left: 0;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #000000;
`;

const Description = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 1rem;
  color: #777777;
  margin-top: 8px;
`;
