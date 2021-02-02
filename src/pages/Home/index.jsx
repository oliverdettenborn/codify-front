import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

import { BannerWelcome } from './components';

export default function Home() {
  const { user } = useContext(UserContext);
  const history = useHistory();

  if (!user.token) {
    history.push('/');
  }

  return (
    <BannerWelcome user={user} alredyStartCourse={false} />
  );
}
