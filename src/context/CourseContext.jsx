import React, { createContext, useState } from 'react';

const CourseContext = createContext();

export default CourseContext;

export function CourseProvider({ children }) {
  const [course, setCourse] = useState(null);
  const [lastTopicId, setLastTopicId] = useState(null);

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
