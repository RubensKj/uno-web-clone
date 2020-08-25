import React from 'react';

// Components
import DeckCards from '../../components/DeckCards';
import CardsStorage from '../../components/CardsStorage';
import PlayerCards from '../../components/PlayerCards';
import PlayerInfo from '../../components/PlayerInfo';

import {
  Container, Wrapper, TopGuyArea, DeckArea,
  CardsArea, LeftGuyArea, RightGuyArea, PlayerGuyArea,
  CardsTop, CardsLeft, CardsRight
} from './styles';

const Match: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <TopGuyArea>
          <PlayerInfo />
          <CardsTop>
            <p style={{ fontSize: 14 }}>Top Guy Cards here</p>
          </CardsTop>
        </TopGuyArea>
        <DeckArea>
          <DeckCards />
        </DeckArea>
        <CardsArea>
          <CardsStorage />
        </CardsArea>
        <LeftGuyArea>
          <PlayerInfo />
          <CardsLeft>
            <p style={{ fontSize: 14 }}>Left Guy here</p>
          </CardsLeft>
        </LeftGuyArea>
        <RightGuyArea>
          <PlayerInfo />
          <CardsRight>
            <p style={{ fontSize: 14 }}>Right Guy here</p>
          </CardsRight>
        </RightGuyArea>
        <PlayerGuyArea>
          <PlayerCards />
        </PlayerGuyArea>
      </Wrapper>
    </Container>
  );
}

export default Match;