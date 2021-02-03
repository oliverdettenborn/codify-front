import React from 'react';
import styled, { css } from 'styled-components';

export default function PlainText(props) {
  const {
    children,
    fontSize,
    fontWeight,
    marginBottom,
  } = props;

  return (
    <Text fontSize={fontSize} fontWeight={fontWeight} marginBottom={marginBottom}>
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
    `
  )}
`;
