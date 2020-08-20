import React from 'react';

// Components
import SideCardUser from '../SideCardUser';

import { Container } from './styles';

const SidePlayersCard: React.FC = () => {
  return (
    <Container>
      <SideCardUser />
      <SideCardUser />
    </Container>
  );
}

export default SidePlayersCard;