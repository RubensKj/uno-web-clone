import React from 'react';

// Assets
import BoxIcon from '../../assets/BoxIcon';
import GridIcon from '../../assets/GridIcon';
import LayersIcon from '../../assets/LayersIcon';
import ConfigIcon from '../../assets/ConfigIcon';
import UsersIcon from '../../assets/UsersIcon';

import { Container, IconArea, AvatarArea, Avatar } from './styles';

const HeaderBar: React.FC = () => {
  return (
    <Container>
      <IconArea href="/">
        <div>
          <BoxIcon size={24} color="#00cd69" />
        </div>
      </IconArea>
      <ul>
        <a href="/match/569874">
          <li>
            <GridIcon size={20} color="#2f363d" />
          </li>
        </a>
        <a href="#c">
          <li>
            <LayersIcon size={20} color="#2f363d" />
          </li>
        </a>
        <a href="#b">
          <li>
            <UsersIcon size={20} color="#2f363d" />
          </li>
        </a>
        <a href="#a">
          <li>
            <ConfigIcon size={20} color="#2f363d" />
          </li>
        </a>
      </ul>
      <ul>
        <AvatarArea>
          <Avatar src="https://instagram.fbnu4-1.fna.fbcdn.net/v/t51.2885-15/e35/47489450_965388186987389_6000681300519320808_n.jpg?_nc_ht=instagram.fbnu4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=FqutA5zdMpUAX-r35hw&oh=fda34f81911c0c9f35ace0fc5a7aa5f9&oe=5F676990" />
        </AvatarArea>
      </ul>
    </Container>
  );
}

export default HeaderBar;