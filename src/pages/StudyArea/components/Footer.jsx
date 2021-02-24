import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components';

import Checkbox from './Checkbox';

export default function Activity(props) {
  const {
    activity, refresh, setRefresh, changeToNext, index, totalOfActivities, disabledButton,
  } = props;

  return (
    <Footer>
      <Checkbox
        id={activity.theoryId || activity.exerciseId}
        userHasFinished={activity.userHasFinished}
        refresh={refresh}
        setRefresh={setRefresh}
        type={index === 0 ? 'theories' : 'exercises'}
      />
      <Button
        onClick={changeToNext}
        disabledButton={disabledButton}
        width="25%"
        height="30%!important"
        fontsize="15px"
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
`;
