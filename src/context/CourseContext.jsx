import React, {
  createContext, useEffect, useContext, useState,
} from 'react';
import axios from 'axios';
import hexRgb from 'hex-rgb';
import UserContext from './UserContext';
import useLocalStorage from '../hooks/useLocalStorage';

const CourseContext = createContext();

export default CourseContext;

export function CourseProvider({ children }) {
  const [courseId, setCourseId] = useLocalStorage('@codify-courseId', 0);
  const [lastTopicId, setLastTopicId] = useLocalStorage('@codify-lastTopicId', '');
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [chapters, setChapters] = useLocalStorage('@codify-chapters', []);
  const [refresh, setRefresh] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (courseId === 0) return;
    axios
      .get(`${process.env.REACT_APP_URL_API}/courses/${courseId}/chapters`,
        { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => {
        setCourseName(response.data.title);
        setDescription(response.data.description);
        setColor(hexRgb(response.data.color || '#8E8e8E', { format: 'array' }).slice(0, 3).join());
        setChapters(response.data.chapters);
        setImageUrl(response.data.imageUrl);
        setLastTopicId(response.data.lastTopicId);
      })
      .catch((err) => {
        if (err && err.response.status === 401) {
          setCourseId(0);
          setUser({});
        }
      });
  }, [courseId, refresh]);

  return (
    <CourseContext.Provider
      value={{
        lastTopicId,
        setLastTopicId,
        courseId,
        setCourseId,
        courseName,
        description,
        color,
        chapters,
        imageUrl,
        setRefreshContext: setRefresh,
        refreshContext: refresh,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}
