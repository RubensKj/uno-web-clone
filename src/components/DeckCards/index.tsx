import React from 'react';

// Components
import CardBehind from '../CardBehind';

import { Container } from './styles';

const DeckCards: React.FC = () => {
  return (
    <Container>
      <CardBehind />
    </Container>
  );
}

export default DeckCards;