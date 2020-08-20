import React from 'react';

// Components
import CardsStorage from '../../components/CardsStorage';
import PlayerCards from '../../components/PlayerCards';

import { Container, Wrapper, TopGuyArea, DeckArea, CardsArea, LeftGuyArea, RightGuyArea, PlayerGuyArea } from './styles';

const Match: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <TopGuyArea>
          <p>TopGuy</p>
        </TopGuyArea>
        <DeckArea>
          <p>Baralho aqui</p>
        </DeckArea>
        <CardsArea>
          <CardsStorage />
        </CardsArea>
        <LeftGuyArea>
          <p>Left Guy here</p>
        </LeftGuyArea>
        <RightGuyArea>
          <p>Right Guy here</p>
        </RightGuyArea>
        <PlayerGuyArea>
          <PlayerCards />
        </PlayerGuyArea>
      </Wrapper>
    </Container>
  );
}

export default Match;