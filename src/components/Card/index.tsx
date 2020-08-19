import React from 'react';

import { Container, ColorAndNumber, Content, Value } from './styles';

interface CardProps {
  classForValue?: string;
  value: number | string;
  color: string;
}

const Card: React.FC<CardProps> = ({ classForValue = '', value, color }) => {
  return (
    <Container className={classForValue}>
      <ColorAndNumber color={color}>
        <Content>
          <Value>{value}</Value>
        </Content>
      </ColorAndNumber>
    </Container>
  );
}

export default Card;