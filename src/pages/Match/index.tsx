import React from 'react';

// Components
import CardsStorage from '../../components/CardsStorage';
import UserContent from '../../components/UserContent';

import { Container, Wrapper, CardsArea, Primary, Secondary, Third, Fourth } from './styles';

const Match: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <CardsArea>
          <CardsStorage />
        </CardsArea>
        <Primary>
          <UserContent level={128} username="GoldenKj" avatar="https://instagram.ffln2-2.fna.fbcdn.net/v/t51.2885-15/e35/47489450_965388186987389_6000681300519320808_n.jpg?_nc_ht=instagram.ffln2-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=FqutA5zdMpUAX-r35hw&oh=978199be8119f598a818e2b86e268bca&oe=5F676990" />
        </Primary>
        <Secondary>
          <UserContent level={24} username="Marco" />
        </Secondary>
        <Third>
          <UserContent level={67} username="Gustavo F. Martins" />
        </Third>
        <Fourth>
          <UserContent level={4579} username="Vinicius de souza silva" />
        </Fourth>
      </Wrapper>
    </Container>
  );
}

export default Match;