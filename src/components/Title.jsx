import React from 'react';
import styled from 'styled-components';

export default function Title() {
  return (
    <TitleHeader>
      <h1>codify</h1>
      <h3>learn. practice. code.</h3>
    </TitleHeader>
  );
}

const TitleHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    h1{
        font-size: 4rem;
        color: white;
        font-family: 'Zilla Slab Highlight', cursive;
        letter-spacing: 3px;
    }
    h3{
        font-size: 1.2rem;
        margin-top: 10px;
        color: white;
        font-family: 'Orienta', sans-serif;
    }
`;
