/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

export default function Console(props) {
  const {
    suites, totalTests, passedTotal, failedTotal,
  } = props;

  return (
    <Container>
      {
        suites.map((suite) => (suite.length > 0)
            && suite.map((test, i) => (
              <TitleItem key={test.id}>
                {`Teste ${i + 1}: `}
                <Descritor state={test.state}>
                  {test.state === 'passed' ? 'Sucesso!' : 'Erro!'}
                </Descritor>
                <SubDescritor>
                  {test.title}
                </SubDescritor>
                {
                  test.state === 'failed' && (
                  <SubDescritor>
                    Detalhes: esperava receber
                    {' '}
                    <u>{test.error.expected}</u>
                    {' '}
                    e retornou
                    {' '}
                    <u>{String(test.error.actual)}</u>
                  </SubDescritor>
                  )
                }
              </TitleItem>
            )))
      }
      <Footer>
        <TitleItem>
          {'Total de Testes: '}
          <Descritor>{totalTests}</Descritor>
        </TitleItem>
        <TitleItem>
          {'Testes que passaram: '}
          <Descritor state="passed">{passedTotal}</Descritor>
        </TitleItem>
        <TitleItem>
          {'Testes que falharam: '}
          <Descritor state="failed">{failedTotal}</Descritor>
        </TitleItem>
      </Footer>
    </Container>
  );
}

const Container = styled.header`
  color: #E0E0E0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
`;

const Footer = styled.footer`
  color: #E0E0E0;
  margin-top: 25px;
`;

const TitleItem = styled.div`
  color: #E0E0E0;
  font-weight: bold;
  line-height: 20px;
  margin-top: 5px;
`;

const Descritor = styled.span`
  color: ${(props) => (props.state === 'passed'
    ? '#71c488'
    : (props.state === 'failed' ? '#F19799' : '#E0E0E0'))};
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

const SubDescritor = styled.p`
  font-weight: 200;
  font-size: 14px;

  &::first-letter{
    text-transform: uppercase
  }
`;
