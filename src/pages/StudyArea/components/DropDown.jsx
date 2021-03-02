import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuOptionGroup,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import { BsCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { ButtonClickToBack } from '../../../components';
import CourseContext from '../../../context/CourseContext';

const ButtonTransparent = styled(Button)`
  background: transparent!important;
  :hover{
    background: none!important;
  }
`;

export default function CourseDropdown(props) {
  const {
    topicId, courseId, showOnlyButtonBack, refreshContext,
  } = props;
  const { chapters } = useContext(CourseContext);
  const [defaultOption, setDefaultOption] = useState({});
  const [options, setOptions] = useState([]);

  if (showOnlyButtonBack) {
    return (
      <Container>
        <ButtonClickToBack to={`/cursos/${courseId}`} top="5px" left="10px" />
      </Container>
    );
  }

  useEffect(() => {
    const currentChapter = chapters.find(({ topics }) => topics.filter((t) => t.id === +topicId));
    const currentTopic = currentChapter.topics.find((t) => t.id === +topicId);
    setDefaultOption({
      chapterName: currentChapter.name,
      chapterId: currentChapter.id,
      topicId,
      topicName: currentTopic.name,
    });
    const optionsMap = chapters
      .map((chapter) => {
        const topicsMap = chapter.topics.map((topic) => (
          topic.id !== topicId && {
            id: topic.id,
            label: topic.name,
            done: topic.userHasFinished,
          }
        ));
        return {
          id: chapter.id,
          name: chapter.name,
          items: topicsMap,
        };
      });
    setOptions(optionsMap);
  }, [refreshContext, topicId, courseId, chapters]);

  return (
    <Container>
      <ButtonClickToBack to={`/cursos/${courseId}`} top="5px" left="10px" />
      <Menu placement="top" size="1rem">
        <MenuButton as={ButtonTransparent} rightIcon={<FiChevronDown />}>
          {`${defaultOption.chapterName} - ${defaultOption.topicName}`}
        </MenuButton>
        <Box>
          {
            options.map((opt) => (
              <MenuOptionGroup title={opt.name} key={opt.id}>
                {
                  opt.items.map((item) => (
                    <TextLink to={`/estudo/${courseId}/topic/${item.id}`} key={item.id}>
                      {
                          (item.done)
                            ? <FaCheckCircle color="#76DF93" />
                            : <BsCircleFill color="#6A6A6A" />
                        }
                      {item.label}
                    </TextLink>
                  ))
                }
              </MenuOptionGroup>
            ))
          }
        </Box>
      </Menu>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #161616;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  z-index: 2;
  height: 50px;
  position: relative;
  font-family: 'Roboto';
  font-style: normal;
  color: #D6D6D6;
`;

const Box = styled(MenuList)`
  background: #292929!important;
  color: #D6D6D6;
  max-height: 420px;
  width: 400px;
  padding: 30px 5px;
  border-radius: 25px;
  margin-top: -10px;
  overflow-y: scroll;

  div:hover{
    background: none!important;
  }
`;

const TextLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 30px;
  cursor: pointer;
  font-size: 1rem;

  svg{
    padding-right: 8px;
    font-size: 24px;
  }
`;
