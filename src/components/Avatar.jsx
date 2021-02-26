import React from 'react';
import Avatar from 'react-avatar';

export default function UserAvatar({ user, size }) {
  return (
    <Avatar src={user.avatarUrl} email={user.email} name={user.name} round size={size} color={Avatar.getRandomColor('sitebase', ['red', 'green', 'pink', 'blue'])} />
  );
}
