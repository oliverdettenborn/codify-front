import React from 'react';
import { Reset } from 'styled-reset';
import 'react-notifications/lib/notifications.css';
import {
  BrowserRouter,
} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import Globalstyles from './utils/globalstyles';
import Routes from './routesApp';
import Providers from './providers';

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Reset />
        <Globalstyles />
        <NotificationContainer />
        <Routes />
      </BrowserRouter>
    </Providers>
  );
}

export default App;
