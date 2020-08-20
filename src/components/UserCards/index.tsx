import React from 'react';

// Components
import Card from '../Card';

import { Wrapper, Container } from './styles';

const UserCards: React.FC = () => {
  return (
    <Wrapper>
      <Container size={8}>
        <Card classForValue="user-card" value={9} color="yellow" />
        <Card classForValue="user-card" value={2} color="red" />
        <Card classForValue="user-card" value={2} color="red" />
        <Card classForValue="user-card" value={2} color="blue" />
        <Card classForValue="user-card" value={2} color="blue" />
        <Card classForValue="user-card" value={2} color="blue" />
        <Card classForValue="user-card" value={2} color="green" />
        <Card classForValue="user-card" value={2} color="green" />
      </Container>
    </Wrapper>
  );
}

export default UserCards;