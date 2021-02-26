import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import ContainerCourse from './ContainerCourse';

export default function TitleNameUser({ user, setUser }) {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/courses`,
        { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => setCourses(response.data))
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setUser({});
          history.push('/');
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ContainerCourse
      courses={courses}
      loading={loading}
      showMessageWithEmptyArray
      isFlexStart
    />
  );
}
