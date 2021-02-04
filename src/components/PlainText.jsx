import React from 'react';
import styled, { css } from 'styled-components';

export default function PlainText(props) {
  const {
    children,
    fontSize,
    fontWeight,
    marginBottom,
    alignSelf,
  } = props;

  return (
    <Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginBottom={marginBottom}
      alignSelf={alignSelf}
    >
      {children}
    </Text>
  );
}

const Text = styled.span`
  ${(props) => (
    css`
      font-size: ${props.fontSize};
      font-weight: ${props.fontWeight || 'normal'};
      margin-bottom: ${props.marginBottom || '0'};
      align-self: ${props.alignSelf}
    `
  )}
`;
