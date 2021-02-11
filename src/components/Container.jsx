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
    >
      {children}
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  width: 100%;
  display: flex;

  ${(props) => (
    css`
      flex-direction: ${props.flexDirection || 'initial'};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      justify-content: ${props.justifyContent || 'center'};
      align-items: ${props.alignItems || 'center'};
      border-bottom: ${props.borderBottom || 'none'};
      cursor: ${props.cursor || 'initial'};
    `
  )}
  
  ${mediaQuery} {
    flex-direction: column;
  }
`;
