import React from 'react';
import Editor from '@monaco-editor/react';
import styled from 'styled-components';
import { Button } from '../../../components';

export default function EditorCode(props) {
  const {
    setCode, language, code, title, haveButton, textButton, buttonOnclick,
  } = props;

  const handleEditorChange = (value) => {
    setCode(value);
  };

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
      <Editor
        height="55%"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        language={language}
        onChange={handleEditorChange}
        options={{
          selectOnLineNumbers: true,
          colorDecorators: true,
          formatOnPaste: true,
          tabCompletion: 'on',
          wordWrap: 'on',
          wrappingIndent: 'indent',
          autoIndent: 'full',
          smoothScrolling: true,
          selectionHighlight: true,
          fontFamily: 'Fira Code',
          fontLigatures: true,
          readOnly: false,
          minimap: {
            enabled: false,
          },
        }}
      />
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  button{
    color: #D6D6D6;
    align-items: center;
    margin: 0;

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
`;
