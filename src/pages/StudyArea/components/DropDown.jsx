import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React from 'react';
import styled from 'styled-components';
import { ButtonClickToBack } from '../../../components';

export default function CourseDropdown() {
  const options = ['Apresentação - Como usar', 'Apresentação - Entrando na plataforma', 'Apresentação - Fazendo teorias'];
  const defaultOption = options[0];
  return (
    <Container>
      <ButtonClickToBack to="/" top="1.3vh" left="0" height="35px!important" />
      <Dropdown menuClassName="menu" arrowClassName="arrow" controlClassName="dropdown" options={options} value={defaultOption} placeholder="Select an option" />
    </Container>
  );
}
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #292929;
    height: 8vh;
    position: relative;
    .dropdown {
        background: initial;
        color: #D6D6D6;
        border: none;
        font-family: Roboto;
        cursor: pointer;
    }
    .arrow{
        border-width: 8px 8px 0;
    }
    .menu{
        border-radius: 4px;
        font-family: Roboto;
    }
    .Dropdown-option {
        color: #D6D6D6!important;
        cursor: pointer;
        background: #3D3D3D;
        &:hover{
            background: #797979;
        }
    }
`;
