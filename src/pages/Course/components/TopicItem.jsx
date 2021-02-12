import React from 'react';
import styled from 'styled-components';

import { FaCheckCircle } from 'react-icons/fa';
import { BsCircleFill } from 'react-icons/bs';
import {
  Box,
} from '@chakra-ui/react';
import { TextLink } from '../../../components';

export default function Item({ topic }) {
  return (
    <Topic flex="1" textAlign="left">
      <div>
        {
          (topic.userHasFinished)
            ? <FaCheckCircle color="#76DF93" />
            : <BsCircleFill color="#CFCFCF" />
        }
        <h3>{topic.name}</h3>
      </div>
      <TextLink to={`/estudo/topic/${topic.id}`} text="Visualizar" />
    </Topic>

  );
}

const Topic = styled(Box)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.1rem;
  color: #656565;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3{
    text-align: left;
    margin-left: 15px;
  }

  & > div{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  }
`;
