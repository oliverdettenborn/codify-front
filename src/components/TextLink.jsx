import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function TextLink({
  text, to, color, fontSize,
}) {
  return (
    <Link to={to}>
      <Text
        color={color}
        fontSize={fontSize}
      >
        {text}
      </Text>
    </Link>
  );
}
const Text = styled.h6`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    text-decoration-line: underline;
    text-align: center;
    margin: 15px 0px;
    color: ${(props) => props.color || '#787878'}
`;
