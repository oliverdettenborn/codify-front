import React from 'react';
import styled, { css } from 'styled-components';

import mediaQuery from '../utils/mediaQuery';

export default function PlainText(props) {
  const {
    children,
    color,
    fontSize,
    fontWeight,
    margin,
    alignSelf,
    mediaQueryDisplay,
    mediaQueryMargin,
    className,
  } = props;

  return (
    <Text
      color={color}
      className={className && className}
      fontSize={fontSize}
      fontWeight={fontWeight}
      margin={margin}
      alignSelf={alignSelf}
      mediaQueryDisplay={mediaQueryDisplay}
      mediaQueryMargin={mediaQueryMargin}
    >
      {children}
    </Text>
  );
}

const Text = styled.span`
margin: auto;
text-align: center;
  ${(props) => (
    css`
      color: ${props.color || 'initial'};
      font-size: ${props.fontSize};
      font-weight: ${props.fontWeight || 'normal'};
      margin: ${props.margin || '0'};
      align-self: ${props.alignSelf};
    `
  )}
  
  ${mediaQuery} {
    display: ${(props) => props.mediaQueryDisplay};
    margin: ${(props) => props.mediaQueryMargin};

    &.user-info.title{
      padding-top: 30px;
      font-size: 1.6rem;
    }

    &.user-info{
      font-size: 1rem;
    }
  }
`;
