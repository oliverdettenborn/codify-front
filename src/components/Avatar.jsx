import React from 'react';
import Avatar from 'react-avatar';

export default function UserAvatar({ user }) {
  return (
    <Avatar src={user.avatarUrl} name={user.name} round size="40" color={Avatar.getRandomColor('sitebase', ['red', 'green', 'pink', 'blue'])} />
  );
}
