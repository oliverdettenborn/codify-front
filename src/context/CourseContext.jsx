import React, { createContext, useState } from 'react';

const CourseContext = createContext();

export default CourseContext;

export function CourseProvider({ children }) {
  const [course, setCourse] = useState(null);
  const [lastTopic, setLastTopic] = useState(null);

  return (
    <CourseContext.Provider
      value={{
        course, setCourse, lastTopic, setLastTopic,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}
