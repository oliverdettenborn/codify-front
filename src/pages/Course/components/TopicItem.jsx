import React from 'react';
import styled from 'styled-components';

import { FaCheckCircle } from 'react-icons/fa';
import { BsCircleFill } from 'react-icons/bs';
import {
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { TextLink } from '../../../components';

export default function Item({ topic, courseId }) {
  return (
    <Link to={`/estudo/${topic.courseId}/topic/${topic.id}`} text="">
      <Topic flex="1" textAlign="left">
        <div>
          {
            (topic.userHasFinished)
              ? <FaCheckCircle color="#76DF93" />
              : <BsCircleFill color="#CFCFCF" />
          }
          <h3>{topic.name}</h3>
        </div>
        <TextLink to={`/estudo/${courseId}/topic/${topic.id}`} text="Visualizar" />
      </Topic>
    </Link>
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
  cursor: pointer;
  &:hover{
    background: #fff;
  }

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
