import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from '../context/UserContext';
import { CourseProvider } from '../context/CourseContext';

function Providers({ children }) {
  return (
    <ChakraProvider>
      <UserProvider>
        <CourseProvider>
          {children}
        </CourseProvider>
      </UserProvider>
    </ChakraProvider>
  );
}

export default Providers;
