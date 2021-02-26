import { createGlobalStyle } from 'styled-components';

import mediaQuery from './mediaQuery';

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
    border: 0px solid inherit;
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
  html{
    font-size: 18px;
    ${mediaQuery}{
      font-size: 14px;
    }
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    -webkit-border-radius: 10px;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #5B5B5B; 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: #5B5B5B; 
  }

  .notification{
    background: #FFFFFF!important;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)!important;
    border-radius: 10px!important;
  }

  .notification-message .message{
    color: #898989!important;
    font-size: 14px!important;
  }

  .notification-success:before{
    color: #008E16!important;
  }

  .notification-error:before{
    color: #C10000!important;
  }

  .notification-success .notification-message .title{
    color: #008E16!important;
    font-size: 16px!important;
  }

  .notification-error .notification-message .title{
    color: #C10000!important;
    font-size: 16px!important;
  }
  `;
export default GlobalStyle;
