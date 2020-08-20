import React from 'react';

import Card from '../Card';

import { Container, Table, CardArea } from './styles';

const CardsStorage: React.FC = () => {
  return (
    <Container>
      <Table />
      <CardArea>
        <Card classForValue={handleIndex(1, false)} value={7} color="yellow" />
      </CardArea>
      <CardArea>
        <Card classForValue={handleIndex(2, false)} value={5} color="blue" />
      </CardArea>
      <CardArea>
        <Card classForValue={handleIndex(3, false)} value={2} color="red" />
      </CardArea>
      <CardArea>
        <Card classForValue={handleIndex(4, false)} value={3} color="red" />
      </CardArea>
      <CardArea>
        <Card classForValue={handleIndex(5, true)} value={5} color="blue" />
      </CardArea>
    </Container>
  );
}

const handleIndex = (index: number, isLast: boolean) => {
  if (isLast) {
    return 'scale-0';
  }

  let clampedCount = 0;

  clampedCount = Math.max(index, 0);
  clampedCount = Math.min(index, 4);

  return `scale-${clampedCount}`;
};

export default CardsStorage;