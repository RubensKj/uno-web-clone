import React from 'react';

// Components
import CardsStorage from '../../components/CardsStorage';
import UserContent from '../../components/UserContent';
import UserCards from '../../components/UserCards';
import PlayersCard from '../../components/PlayersCard';
import SidePlayersCard from '../../components/SidePlayersCard';

import { Container, Wrapper, CardsArea, Primary, Secondary, Third, Fourth } from './styles';

const Match: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <CardsArea>
          <CardsStorage />
        </CardsArea>
        <Primary>
          <UserContent isMe={true} isMyTurn={true} level={128} username="GoldenKj" avatar="https://instagram.ffln2-2.fna.fbcdn.net/v/t51.2885-15/e35/47489450_965388186987389_6000681300519320808_n.jpg?_nc_ht=instagram.ffln2-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=FqutA5zdMpUAX-r35hw&oh=978199be8119f598a818e2b86e268bca&oe=5F676990" />
          <UserCards />
        </Primary>
        <Secondary>
          <UserContent isMe={false} isMyTurn={false} level={24} username="Marco" avatar="https://static.dribbble.com/users/1592944/avatars/normal/0632e1877f76f0e4788f3c72e567ad56.jpg?1589215169" />
          <PlayersCard />
        </Secondary>
        <Third>
          <UserContent isMe={false} isMyTurn={false} level={67} username="Gustavo F. Martins" avatar="https://static.dribbble.com/users/1592944/avatars/normal/0632e1877f76f0e4788f3c72e567ad56.jpg?1589215169" />
          <SidePlayersCard />
        </Third>
        <Fourth>
          <UserContent isMe={false} isMyTurn={false} level={4579} username="Jxxba" avatar="https://static.dribbble.com/users/1592944/avatars/normal/0632e1877f76f0e4788f3c72e567ad56.jpg?1589215169" />
          <SidePlayersCard />
        </Fourth>
      </Wrapper>
    </Container>
  );
}

export default Match;