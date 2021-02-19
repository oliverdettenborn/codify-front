import React from 'react';

import {
  transitions, positions, Provider as AlertProvider,
} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from '../context/UserContext';
import { CourseProvider } from '../context/CourseContext';

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

function Providers({ children }) {
  return (
    <ChakraProvider>
      <AlertProvider template={AlertTemplate} {...options}>
        <UserProvider>
          <CourseProvider>
            {children}
          </CourseProvider>
        </UserProvider>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default Providers;
