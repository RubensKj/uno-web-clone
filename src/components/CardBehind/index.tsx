import React from 'react';

// Assets
import BoxIcon from '../../assets/BoxIcon';

import { Container, Background } from './styles';

const CardBehind: React.FC = () => {
  return (
    <Container>
      <Background>
        <BoxIcon size={32} color="#333" />
      </Background>
    </Container>
  );
}

export default CardBehind;