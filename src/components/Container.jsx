import React from 'react';
import styled, { css } from 'styled-components';

import mediaQuery from '../utils/mediaQuery';

export default function Container(props) {
  const {
    children,
    flexDirection,
    justifyContent,
    alignItems,
    margin,
    padding,
    borderBottom,
    cursor,
    background,
    height,
    avatarBorder,
  } = props;

  return (
    <FlexContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      padding={padding}
      borderBottom={borderBottom}
      cursor={cursor}
      flexDirection={flexDirection}
      background={background}
      height={height}
      avatarBorder={avatarBorder}
    >
      {children}
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  width: 100%;
  display: flex;

  .sb-avatar__text {
    &:first-child {
    border: ${(props) => (props.avatarBorder || 'initial')};
    }
  }

  ${(props) => (
    css`
      flex-direction: ${props.flexDirection || 'initial'};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      justify-content: ${props.justifyContent || 'center'};
      align-items: ${props.alignItems || 'center'};
      border-bottom: ${props.borderBottom || 'none'};
      background-color: ${props.background || 'intial'};
      height: ${props.height || 'initial'};
      cursor: ${props.cursor || 'initial'};
    `
  )}
  
  ${mediaQuery} {
    flex-direction: column;
  }
`;
