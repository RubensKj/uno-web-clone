import React from 'react';

import { Container, ColorAndNumber, Wrapper, TopValue, BottomValue, Content, Value } from './styles';

interface CardProps {
  classForValue?: string;
  value: number | string;
  color: string;
}

const Card: React.FC<CardProps> = ({ classForValue = '', value, color }) => {
  return (
    <Container className={classForValue}>
      <Wrapper>
        <TopValue>
          <span>{value}</span>
        </TopValue>
        <BottomValue>
          <span>{value}</span>
        </BottomValue>
      </Wrapper>
      <ColorAndNumber color={color}>
        <Content>
          <Value>{value}</Value>
        </Content>
      </ColorAndNumber>
    </Container>
  );
}

export default Card;