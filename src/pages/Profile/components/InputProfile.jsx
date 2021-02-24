/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { Container, Input, PlainText } from '../../../components';

export default function InputProfile(props) {
  const {
    label,
    value,
    onChange,
    placeholder,
    type,
  } = props;
  return (
    <Container>
      <StyledLabel>
        <PlainText
          color="#9F9F9F"
          fontWeight="bold"
        >
          {label}
        </PlainText>
        <Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          required={false}
        />
      </StyledLabel>
    </Container>
  );
}

const StyledLabel = styled.label`
  width: 100%;
`;
