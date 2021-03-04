import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function Checkbox(props) {
  const {
    id, userHasFinished, setChecked, checked, handleCheckboxChange, code,
  } = props;

  useEffect(() => {
    setChecked(userHasFinished);
  }, [id]);

  return (
    <CheckboxContainer checked={checked} onClick={() => handleCheckboxChange(code)}>
      <HiddenCheckbox checked={checked} />
      <StyledCheckbox checked={checked} />
      <Text checked={checked}>
        {' '}
        {checked ? 'Concluído' : 'Marcar como concluído'}
        {' '}
      </Text>
    </CheckboxContainer>
  );
}
export const CheckboxContainer = styled.div`
  height: 35px;
  justify-self: flex-start;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`;
export const Text = styled.label`
  color: ${(props) => (props.checked ? '#76DF93' : '#9D9D9D')};
  font-family: 'Roboto';
  font-weight: bold;
  margin-left: 5px;
  margin-top: 2px;
  cursor: pointer;
  transition: all 0.5s;
`;
export const StyledCheckbox = styled.label`
  width: 23px;
  height: 23px;
  margin-right: 6px;
  border-radius: 2px;
  border: ${(props) => (props.checked ? '2px solid #76DF93' : '2px solid #9D9D9D')};
  background: ${(props) => (props.checked ? '#76DF93' : 'initial')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
`;
