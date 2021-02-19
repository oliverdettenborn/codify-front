import React from 'react';
import styled from 'styled-components';

import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

import TopicItem from './TopicItem';

export default function ClassWrapper({ chapter, courseId }) {
  return (
    <AccordionItem>
      <h2>
        <ContainerTitle>
          <AccordionIcon />
          <TitleItem flex="1" textAlign="left">
            {chapter.name}
          </TitleItem>
          <QuantityInfos flex="0.5" textAlign="right">
            {`${chapter.topicsQuantity} aulas • ${chapter.exercisesQuantity} exercícios`}
          </QuantityInfos>
        </ContainerTitle>
      </h2>
      <PanelItem pb={4}>
        {
          chapter.topics.map((topic) => (
            <TopicItem
              topic={topic}
              key={topic.id}
              courseId={courseId}
            />
          ))
        }
      </PanelItem>
    </AccordionItem>
  );
}

const QuantityInfos = styled(Box)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 33px;
  color: #656565;
`;

const TitleItem = styled(Box)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.4rem;
  margin-left: 8px;
  color: #656565;
`;

const PanelItem = styled(AccordionPanel)`
  background: #F8F8F8;
  padding: 0 -15px;
`;

const ContainerTitle = styled(AccordionButton)`
  font-family: 'Roboto';
  padding: 0 15px;

  svg{
    font-size: 35px;
    font-weight: bold;
  }
`;
