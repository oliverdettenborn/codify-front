import React from 'react';
import styled from 'styled-components';

import { PlainText } from '../../../components';

export default function ProgressBar({ percentage }) {
  return (
    <Bar>
      <Progress percentage={percentage}>
        <PlainText fontSize="12px">
          {`${percentage}%`}
        </PlainText>
      </Progress>
    </Bar>
  );
}

const Bar = styled.div`
  width: 200px;
  height: 16px;
  position: relative;
  background: lightgray;
  border-radius: 15px;
  margin-top: 15px;
`;

const Progress = styled.div`
  position: absolute;
  left: 0;
  width: ${({ percentage }) => (percentage > 10 ? `${percentage}%` : '10%')};
  height: 16px;
  background: #76DF93;
  z-index: 1;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
