import React from 'react';
import styled, { css } from 'styled-components';

export default function PlainText(props) {
  const {
    children,
    color,
    fontSize,
    fontWeight,
    margin,
    alignSelf,
  } = props;

  return (
    <Text
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      margin={margin}
      alignSelf={alignSelf}
    >
      {children}
    </Text>
  );
}

const Text = styled.span`
  ${(props) => (
    css`
      color: ${props.color || 'initial'};
      font-size: ${props.fontSize};
      font-weight: ${props.fontWeight || 'normal'};
      margin: ${props.margin || '0'};
      align-self: ${props.alignSelf}
    `
  )}
`;
