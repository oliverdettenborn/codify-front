import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

import { BannerWelcome, ListAllCourse } from './components';

export default function Home() {
  let { user } = useContext(UserContext);
  // const history = useHistory();

  // if (!user.token) {
  //   history.push('/');
  // }

  user = {
    name: 'Oliver Dettenborn',
    email: 'oliver.dettenborn@gmail.com',
  };

  return (
    <>
      <BannerWelcome user={user} alredyStartCourse={false} />
      <ListAllCourse />
    </>
  );
}
