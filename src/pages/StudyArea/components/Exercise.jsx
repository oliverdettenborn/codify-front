/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactSafeHtml from 'react-safe-html';
import { HiOutlineLightBulb, HiPencil } from 'react-icons/hi';
import { VscRunAll } from 'react-icons/vsc';
import * as mochaAsPromised from '@bootcamp-ra/mocha-as-promised';
import { NotificationManager } from 'react-notifications';
import Footer from './Footer';
import EditorCode from './EditorCode';
import Console from './Console';
import media from '../../../utils/mediaQuery';

export default function Exercise(props) {
  const {
    exercise, handleCheckboxChange, checked, index,
  } = props;
  const [resultTests, setResultTests] = useState({});
  const [showSolution, setShowSolution] = useState(false);
  const [code, setCode] = useState(exercise.initialCode);

  useEffect(() => {
    setResultTests({});
    setShowSolution(false);
    setCode(exercise.initialCode);

    if (exercise.solutionUser) {
      setCode(exercise.solutionUser);
    }
  }, [exercise.exerciseId, index]);

  function runTestsExercise() {
    mochaAsPromised
      .runTests(code, exercise.tests)
      .then((result) => {
        setResultTests(result);
        if (result.total === result.passed && !checked) {
          handleCheckboxChange(code);
        } else if (result.total !== result.passed && checked) {
          handleCheckboxChange(code);
        }
      })
      .catch(() => NotificationManager.error('Ocorreu um erro!', 'Não foi possível rodar os testes!'));
  }

  return (
    <Container>
      <ContainerLeft>
        <Enunciated>
          <ReactSafeHtml html={exercise.enunciated} />
        </Enunciated>
        <Footer {...props} code={code} />
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
          buttonOnclick={() => setShowSolution(!showSolution)}
        />
        <Console
          title="Console"
          haveButton
          resultTests={resultTests}
          textButton={(
            <>
              Rodar os testes
              <VscRunAll size={18} />
            </>
          )}
          buttonOnclick={runTestsExercise}
        />

        {
          showSolution && (
            <BoxCover>
              <EditorCode
                code={exercise.solution}
                height="100%"
                setCode={() => true}
                language={exercise.language}
                title="Nossa solução"
                haveButton
                readOnly
                textButton={(
                  <>
                    Seu código
                    <HiPencil size={18} />
                  </>
          )}
                buttonOnclick={() => setShowSolution(!showSolution)}
              />
            </BoxCover>
          )
        }
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
      width: 180px;
    }
  }

  ${media}{
    width: 100%;
    margin-bottom: 10px;
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

  ${media}{
    height: 350px;;
  }
`;

const ContainerRight = styled.div`
  width: 60%;
  height: 100%;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;

  ${media}{
    width: 100%;
    margin-top: 10px;
  }
`;

const BoxCover = styled.aside`
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
  height: 100%;
  min-height: 100vh;
  z-index: 5;
  background: #3d3d3d;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #3d3d3d;
  overflow: auto;
  ${media}{
    flex-direction: column;
  }
`;
