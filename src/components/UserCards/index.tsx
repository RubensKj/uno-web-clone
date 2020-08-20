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
        <Card classForValue="user-card" value={7} color="blue" />
        <Card classForValue="user-card" value={5} color="blue" />
        <Card classForValue="user-card" value={4} color="blue" />
        <Card classForValue="user-card" value={9} color="green" />
        <Card classForValue="user-card" value={8} color="green" />
      </Container>
    </Wrapper>
  );
}

export default UserCards;