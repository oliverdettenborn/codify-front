import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CourseContext = createContext();

export default CourseContext;

export function CourseProvider({ children }) {
  const [course, setCourse] = useLocalStorage('@codify-course', {});
  const [lastTopicId, setLastTopicId] = useLocalStorage('@codify-lastTopic', '');

  return (
    <CourseContext.Provider
      value={{
        course, setCourse, lastTopicId, setLastTopicId,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}
