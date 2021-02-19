import React, {
  createContext, useEffect, useContext, useState,
} from 'react';
import axios from 'axios';
import hexRgb from 'hex-rgb';
import useLocalStorage from '../hooks/useLocalStorage';
import UserContext from './UserContext';

const CourseContext = createContext();

export default CourseContext;

export function CourseProvider({ children }) {
  const [courseId, setCourseId] = useLocalStorage('@codify-course', 0);
  const [lastTopicId, setLastTopicId] = useLocalStorage('@codify-lastTopic', '');
  const [courseName, setCourseName] = useLocalStorage('@codify-courseName', '');
  const [description, setDescription] = useLocalStorage('@codify-description', '');
  const [color, setColor] = useLocalStorage('@codify-color', '');
  const [imageUrl, setImageUrl] = useLocalStorage('@codify-imageUrl', '');
  const [chapters, setChapters] = useLocalStorage('@codify-chapters', []);
  const [refresh, setRefresh] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/courses/${courseId}/chapters`,
        { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => {
        setCourseName(response.data.title);
        setDescription(response.data.description);
        setColor(hexRgb(response.data.color, { format: 'array' }).slice(0, 3).join());
        setChapters(response.data.chapters);
        setImageUrl(response.data.imageUrl);
        setLastTopicId(response.data.lastTopicId);
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
