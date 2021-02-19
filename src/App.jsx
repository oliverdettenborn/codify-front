import React from 'react';
import { Reset } from 'styled-reset';

import {
  BrowserRouter,
} from 'react-router-dom';

import Globalstyles from './utils/globalstyles';
import Routes from './routesApp';
import Providers from './providers';

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Reset />
        <Globalstyles />
        <Routes />
      </BrowserRouter>
    </Providers>
  );
}

export default App;
