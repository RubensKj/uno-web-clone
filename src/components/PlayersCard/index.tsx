import React from 'react';

// Components
import CardUser from '../CardUser';

import { Container } from './styles';

const PlayersCard: React.FC = () => {
  return (
    <Container>
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />
    </Container>
  );
}

export default PlayersCard;