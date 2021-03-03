import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components';
import MessageTests from './MessageTests';

export default function Console(props) {
  const {
    title, haveButton, textButton, buttonOnclick, resultTests,
  } = props;

  return (
    <>
      <Header>
        {title && <Title>{title}</Title>}
        {
          haveButton && (
          <Button
            onClick={buttonOnclick}
            type="button"
            background="#595959"
            width="160px"
            height="35px"
            fontsize="15px"
            borderRadius="10px"
            padding="5px"
          >
            {textButton}
          </Button>
          )
        }
      </Header>
      <ConsoleBox>
        {
          (resultTests && resultTests.suites && resultTests.suites.length > 0)
            ? (
              <MessageTests
                suites={resultTests.suites}
                totalTests={resultTests.total}
                passedTotal={resultTests.passed}
                failedTotal={resultTests.failed}
              />
            )
            : <InitialMessage>Rode os testes para verificar seu código</InitialMessage>
        }
      </ConsoleBox>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #3d3d3d;

  button{
    color: #D6D6D6;
    align-items: center;
    margin: 2px;

    svg{
      margin-left: 7px;
      margin-top: -2px;
    }
  }
`;

const Title = styled.h6`
  color: #E0E0E0;
  font-size: 0.9rem;
  font-weight: 600;
  background: #3d3d3d;
`;

const ConsoleBox = styled.div`
  width: 100%;
  height: 30%;
  background:#1E1E1E;
  overflow-y: auto;
  font-family: 'Roboto', sans-serif;
  padding: 20px;
`;

const InitialMessage = styled.h6`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #E0E0E0;
`;
