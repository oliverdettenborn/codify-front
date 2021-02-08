import React from 'react';

import { Banner } from '../../../components';
import TextWelcome from './TextWelcome';
import TitleNameUser from './TitleNameUser';

export default function BannerWelcome({ user, alredyStartCourse }) {
  return (
    <Banner>
      <TitleNameUser name={user && user.name && user.name.split(' ')[0]} />
      <TextWelcome alredyStartCourse={alredyStartCourse} />
    </Banner>
  );
}
