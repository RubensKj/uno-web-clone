import React from 'react';

import { Container, LevelArea, UserLevel, BorderAvatar, AvatarArea, Avatar, LabelUsername } from './styles';

interface UserProps {
  level: number;
  avatar?: string;
  username: string;
}

const UserContent: React.FC<UserProps> = ({ level, avatar, username }) => {
  return (
    <Container>
      <LevelArea>
        <UserLevel>
          <span>{level}</span>
        </UserLevel>
      </LevelArea>
      <BorderAvatar>
        <AvatarArea>
          <Avatar src={avatar ? avatar : ''} alt="User Logo" />
        </AvatarArea>
      </BorderAvatar>
      <LabelUsername>
        <span>{username}</span>
      </LabelUsername>
    </Container>
  );
}

export default UserContent;