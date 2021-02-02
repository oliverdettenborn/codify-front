import React from 'react';
import styled from 'styled-components';

export default function FormBox({ children, onSubmit }) {
  return (
    <Container onSubmit={onSubmit}>
      {children}
    </Container>
  );
}
const Container = styled.form`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 28%;
  padding: 30px 25px 20px 25px;
  margin: 35px auto 0px auto;
`;
