import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components';

import Checkbox from './Checkbox';
import media from '../../../utils/mediaQuery';

export default function Activity(props) {
  const {
    activity,
    refresh,
    setRefresh,
    changeToNext,
    index,
    totalOfActivities,
    disabledButton,
    setChecked,
    checked,
    handleCheckboxChange,
    code,
  } = props;

  return (
    <Footer>
      <Checkbox
        userHasFinished={activity.userHasFinished}
        refresh={refresh}
        setRefresh={setRefresh}
        checked={checked}
        setChecked={setChecked}
        handleCheckboxChange={handleCheckboxChange}
        code={code}
      />
      <Button
        onClick={changeToNext}
        disabledButton={disabledButton}
        width="25%"
        height="30%!important"
        fontsize="1rem"
        borderRadius="8px"
        padding="5px"
      >
        {
            (index === (totalOfActivities - 1))
              ? 'Finalizar o tópico >>'
              : 'Avançar >>'
          }
      </Button>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  ${media}{
    flex-direction: column;
    margin-top: 15px;

    button{
      width: 200px;
    }
  }
`;
