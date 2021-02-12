/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

export default function CircleLines({ list }) {
  return (
    <Container>
      {list.map((e, i) => (
        <>
          <BulletBox exerciseNumber={i} done={e.userHasFinished}>
            <Bullet done={e.userHasFinished} />
            {i === 0 && 'Teoria'}
            {i !== 0 && 'Exercício'}
          </BulletBox>
          {i !== list.length - 1 && <Dash done={e.userHasFinished} />}
        </>
      ))}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 15vh;
  font-family: Roboto;
  background: #3D3D3D;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  display: flex;
  padding: 0 20vw;
  border-bottom: 1px solid #717171;
`;
const BulletBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.done ? '#76DF93' : props.active ? '#FFFFFF' : '#B2B2B2')};
`;
const Bullet = styled.div`
  border-radius: 50%;
  background-color: ${(props) => (props.done ? '#76DF93' : props.active ? '#FFFFFF' : '#B2B2B2')};
  width: 25px;
  height: 25px;
  margin-bottom: 10px;
`;
const Dash = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => (props.done ? '#76DF93' : props.active ? '#FFFFFF' : '#B2B2B2')};
  content: '';
  margin-bottom: 25px;
`;
