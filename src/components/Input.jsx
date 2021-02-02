import React from 'react';
import styled from 'styled-components';

export default function Input({
  value, onChange, placeholder, type,
}) {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      required
    />
  );
}

const StyledInput = styled.input`
  background: white;
  border-radius: 6px;
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
  color: #9F9F9F;
  border: 1px solid #B4B4B4;
  padding: 16px 21px 14px 21px;
  outline: none;
`;
