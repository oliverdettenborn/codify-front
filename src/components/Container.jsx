import React from 'react';
import styled, { css } from 'styled-components';

import mediaQuery from '../utils/mediaQuery';

export default function Container(props) {
  const {
    children,
    justifyContent,
    alignItems,
    padding,
    borderBottom,
    cursor,
  } = props;

  return (
    <FlexContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      padding={padding}
      borderBottom={borderBottom}
      cursor={cursor}
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
      padding: ${props.padding || 0};
      justify-content: ${props.justifyContent || 'center'};
      align-items: ${props.alignItems || 'center'};
      border-bottom: ${props.borderBottom || 'none'};
      cursor: ${props.cursor || 'initial'}
    `
  )}
  
  ${mediaQuery} {
    flex-direction: column;
  }
`;
