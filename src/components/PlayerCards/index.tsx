import React from 'react';

import { Container, Wrapper } from './styles';
import Card from '../Card';

const PlayerCards: React.FC = () => {
  return (
    <Container>
      <Wrapper size={8}>
        <Card classForValue="user-card" value={9} color="yellow" />
        <Card classForValue="user-card" value={2} color="red" />
        <Card classForValue="user-card" value={2} color="red" />
        <Card classForValue="user-card" value={7} color="blue" />
        <Card classForValue="user-card" value={5} color="blue" />
        <Card classForValue="user-card" value={5} color="blue" />
        <Card classForValue="user-card" value={4} color="blue" />
        <Card classForValue="user-card" value={9} color="green" />
        <Card classForValue="user-card" value={8} color="green" />
      </Wrapper>
    </Container>
  );
}

export default PlayerCards;