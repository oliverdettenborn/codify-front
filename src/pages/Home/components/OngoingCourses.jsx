import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ContainerCourse from './ContainerCourse';
import CourseBoxHorizontal from './CourseBoxHorizontal';

export default function OngoingCourses({ user }) {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/users/courses/ongoing`, { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => setCourses(response.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {
        (courses.length > 0) && (
        <CourseBoxHorizontal
          course={courses[0]}
          titleBox="Continue seu curso atual"
          loading={loading}
        />
        )
      }
      {
        (courses.length > 1) && (
          <ContainerCourse
            courses={courses.slice(1)}
            title={courses.length > 1 && 'Meus cursos em andamento'}
            loading={loading}
            showMessageWithEmptyArray={false}
            haveContinueButton
          />
        )
      }
    </>
  );
}
