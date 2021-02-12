import React from 'react';
import { Reset } from 'styled-reset';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import {
  Home, SignIn, SignUp, Course, Profile, ForgetPassword,
} from './pages';
import Globalstyles from './utils/globalstyles';
import { UserProvider } from './context/UserContext';
import { CourseProvider } from './context/CourseContext';

function App() {
  return (
    <UserProvider>
      <CourseProvider>
        <BrowserRouter>
          <Reset />
          <Globalstyles />
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/cadastro" exact component={SignUp} />
            <Route path="/home" exact component={Home} />
            <Route path="/cursos/:id" exact component={Course} />
            <Route path="/perfil" exact component={Profile} />
            <Route path="/esqueceu-sua-senha" exact component={ForgetPassword} />
          </Switch>
        </BrowserRouter>
      </CourseProvider>
    </UserProvider>
  );
}

export default App;
