/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import ReactSafeHtml from 'react-safe-html';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { VscRunAll } from 'react-icons/vsc';
import * as mochaAsPromised from '@bootcamp-ra/mocha-as-promised';
import { NotificationManager } from 'react-notifications';
import Footer from './Footer';
import EditorCode from './EditorCode';
import Console from './Console';

export default function Exercise(props) {
  const { exercise } = props;
  const [code, setCode] = useState(exercise.initialCode);
  const [resultTests, setResultTests] = useState({});

  function runTestsExercise() {
    mochaAsPromised
      .runTests(code, exercise.tests)
      .then((result) => {
        setResultTests(result);
      })
      .catch(() => NotificationManager.error('Ocorreu um erro!', 'Não foi possível rodar os testes!'));
  }

  return (
    <Container>
      <ContainerLeft>
        <Enunciated>
          <ReactSafeHtml html={exercise.enunciated} />
        </Enunciated>
        <Footer {...props} />
      </ContainerLeft>
      <ContainerRight>
        <EditorCode
          code={code}
          setCode={setCode}
          language={exercise.language}
          title="Seu código"
          haveButton
          textButton={(
            <>
              Ver solução
              <HiOutlineLightBulb size={18} />
            </>
          )}
          buttonOnclick={() => true}
        />
        <Console
          title="Console"
          haveButton
          resultTests={resultTests}
          textButton={(
            <>
              Ver solução
              <VscRunAll size={18} />
            </>
          )}
          buttonOnclick={runTestsExercise}
        />
      </ContainerRight>
    </Container>
  );
}

const ContainerLeft = styled.div`
  background-color: transparent;
  padding: 28px;
  height: 100%;
  width: 40%;
  position: relative;
  color: #E0E0E0;
  font-family: 'Roboto';

  footer{
    bottom: 10px;
    left: 0;
    position: absolute;
    padding: 0 28px;
    flex-wrap: wrap;

    button{
      width: 130px;
    }
  }
`;

const Enunciated = styled.div`
  overflow-y: auto;
  height: calc(100% - 80px);
  margin-bottom: 20px;

  h1,h2,h3,h4,h5,h6{
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: #FFFFFF;
  }

  p{
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
`;

const ContainerRight = styled.div`
  width: 60%;
  height: 100%;
  flex-shrink: 0;
  overflow-y: auto;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
