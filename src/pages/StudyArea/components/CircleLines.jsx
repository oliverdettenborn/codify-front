/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

export default function CircleLines() {
  return (
    <Container>
      <ul>
        <BulletBox done>
          <Bullet done />
          Teoria
        </BulletBox>
        <Dash done />
        <BulletBox done>
          <Bullet done />
          Exercício
        </BulletBox>
        <Dash done />
        <BulletBox active>
          <Bullet active />
          Exercício
        </BulletBox>
        <Dash active />
        <BulletBox>
          <Bullet />
          Exercício
        </BulletBox>
      </ul>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 15vh;
  font-family: Roboto;
  background: #3D3D3D;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  padding: 10px;
  ul{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
  }
`;
const BulletBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.done ? '#76DF93' : props.active ? '#FFFFFF' : '#B2B2B2')};
`;
const Bullet = styled.div`
  border-radius: 50%;
  background-color: ${(props) => (props.done ? '#76DF93' : props.active ? '#FFFFFF' : '#B2B2B2')};
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
`;
const Dash = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => (props.done ? '#76DF93' : props.active ? '#FFFFFF' : '#B2B2B2')};
  content: '';
  margin-bottom: 25px;
`;
