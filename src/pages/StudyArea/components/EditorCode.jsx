import React, { useRef, useEffect } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import styled from 'styled-components';
import { Button } from '../../../components';
import media from '../../../utils/mediaQuery';

export default function EditorCode(props) {
  const {
    setCode,
    language,
    code,
    title,
    haveButton,
    textButton,
    buttonOnclick,
    readOnly = false,
    height,
  } = props;
  const editorRef = useRef(null);
  const monaco = useMonaco();

  const handleEditorChange = (value) => {
    setCode(value);
  };

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  useEffect(() => {
    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }, [monaco]);

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
            fontsize="0.9rem"
            borderRadius="10px"
            padding="5px"
            onMount={handleEditorDidMount}
          >
            {textButton}
          </Button>
          )
        }
      </Header>
      <Editor
        height={height || '55%'}
        defaultLanguage="javascript"
        defaultValue="// digite algo"
        value={code}
        theme="vs-dark"
        language={language}
        onChange={handleEditorChange}
        saveViewState={false}
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
          readOnly,
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
  background: #3d3d3d;

  button{
    color: #D6D6D6;
    align-items: center;
    margin: 0;

    svg{
      margin-left: 7px;
      margin-top: -2px;
    }
  }

  ${media}{
    padding-right: 0;
    padding-left: 20px;
  }
`;

const Title = styled.h6`
  color: #E0E0E0;
  font-size: 0.9rem;
  font-weight: 600;
`;
