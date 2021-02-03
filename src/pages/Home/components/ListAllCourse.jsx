import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ContainerCourse from './ContainerCourse';

export default function TitleNameUser() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/courses`)
      .then((response) => setCourses(response.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ContainerCourse
      courses={courses}
      loading={loading}
      showMessageWithEmptyArray
    />
  );
}
