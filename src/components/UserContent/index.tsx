import React from 'react';

import { Container, LevelArea, UserLevel, BorderAvatar, AvatarArea, Avatar, LabelUsername } from './styles';

interface UserProps {
  isMe: boolean;
  isMyTurn: boolean;
  level: number;
  avatar?: string;
  username: string;
}

const UserContent: React.FC<UserProps> = ({ isMe, isMyTurn, level, avatar, username }) => {
  return (
    <Container isMe={isMe} isMyTurn={isMyTurn}>
      <LevelArea>
        <UserLevel>
          <span>{level}</span>
        </UserLevel>
      </LevelArea>
      <BorderAvatar isMyTurn={isMyTurn}>
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