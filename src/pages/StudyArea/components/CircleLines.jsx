/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

export default function CircleLines({ list, setIndexActivity, indexCurrent }) {
  return (
    <Container>
      {list.map((e, i) => (
        <>
          <BulletBox
            exerciseNumber={i}
            done={e.userHasFinished}
            active={i === indexCurrent}
          >
            <Bullet
              done={e.userHasFinished}
              onClick={() => setIndexActivity(i)}
              active={i === indexCurrent}
            />
            {i === 0 && 'Teoria'}
            {i !== 0 && 'Exercício'}
          </BulletBox>
          {i !== list.length - 1
            && <Dash done={e.userHasFinished} active={i === indexCurrent} />}
        </>
      ))}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 10vh;
  font-family: Roboto;
  background: #202020;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  display: flex;
  padding: 0 20vw;
`;
const BulletBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.done ? '#76DF93' : props.active ? '#FFFFFF' : '#B2B2B2')};
  font-size: 0.75rem;
`;
const Bullet = styled.div`
  border-radius: 50%;
  background-color: ${(props) => (props.done ? '#76DF93' : props.active ? '#FFFFFF' : '#B2B2B2')};
  width: 20px;
  height: 20px;
  margin-bottom: 7px;
`;
const Dash = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => (props.done ? '#76DF93' : props.active ? '#FFFFFF' : '#B2B2B2')};
  content: '';
  margin-bottom: 25px;
`;
