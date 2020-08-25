import React from 'react';

// Assets
import CardsIcon from '../../assets/CardsIcon';

// Styles
import { Container, Wrapper, Username, AvatarArea } from './styles';

const PlayerInfo: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <AvatarArea>
          <img src="https://instagram.fbnu4-1.fna.fbcdn.net/v/t51.2885-15/e35/47489450_965388186987389_6000681300519320808_n.jpg?_nc_ht=instagram.fbnu4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=WEUZ3pmrvdcAX_AhzKD&oh=c2b3878428be01b127c90c047548084e&oe=5F6F5290" alt="User Avatar" />
        </AvatarArea>
        <div>
          <CardsIcon size={18} />
          <span>99</span>
        </div>
      </Wrapper>
      <Username>
        <div>
          <span>Rubens Kleinschmidt Junior</span>
        </div>
      </Username>
    </Container>
  );
}

export default PlayerInfo;