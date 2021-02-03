import React from 'react';
import styled, { css } from 'styled-components';

export default function PlainText({
  children, fontSize, fontWeight, marginBottom,
}) {
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
