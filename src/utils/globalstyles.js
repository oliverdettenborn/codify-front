import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

button{
    cursor: pointer;
  }
  button {
box-shadow: 0px 0px 0px transparent;
border: 0px solid transparent;
text-shadow: 0px 0px 0px transparent;
cursor: pointer;
  }
  button:hover {
box-shadow: 0px 0px 0px transparent;
border: 0px solid transparent;
text-shadow: 0px 0px 0px transparent;
  }
  button:active {
outline: none;
border: none;
  }
  button:focus {
outline: 0;
  }
  svg {
    cursor: pointer;
    color: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  `;
export default GlobalStyle;
