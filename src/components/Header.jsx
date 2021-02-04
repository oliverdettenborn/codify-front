import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from 'react-avatar';

import media from '../utils/mediaQuery';

export default function Header({ user }) {
  return (
    <Container>
      <div>
        <h5>
          <Link to="home">
            codify
          </Link>
        </h5>
        <Link to="/home">
          <Text>
            Home
          </Text>
        </Link>
        <Link to="/cursos">
          <Text>
            Cursos
          </Text>
        </Link>
        <Link to="/perfil">
          <Text>
            Perfil
          </Text>
        </Link>
      </div>
      <Avatar src={user.avatarUrl} name={user.name} round size="40" color={Avatar.getRandomColor('sitebase', ['red', 'green', 'pink', 'blue'])} />
    </Container>
  );
}
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    color: #262626;
    padding: 0 30px 15px 30px;
    margin-top: 15px;
    height: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
    }
    h5{
        color: #333333;
        font-size: 2rem;
        font-family: 'Zilla Slab Highlight', cursive;
        letter-spacing: 2px;
        margin-right: 5px;
        cursor: pointer;
    }
    .sb-avatar{
        cursor: pointer;
        margin-right: 10px;
    }

    ${media}{
      padding-left: 10px;
    }
`;
const Text = styled.h6`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    padding-top: 5px;
    margin: 10px 15px;
    color: #262626;

    ${media}{
      margin: 10px;
    }
`;
