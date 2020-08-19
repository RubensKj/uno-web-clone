import styled from 'styled-components';

interface Props {
  classForValue?: string;
  color?: string;
}

export const Container = styled.div<Props>`
  background: var(--card-default-color);
  border: 2px solid #ecebed;

  padding: 13px;

  width: 100%;
  max-width: 205px;

  max-height: 285px;
  height: 100%;

  border-radius: 12px;

  overflow: hidden;
  user-select: none;
`;

export const ColorAndNumber = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => {
    switch (props.color) {
      case 'yellow':
        return 'var(--card-yellow-color);';
      case 'blue':
        return 'var(--card-blue-color);';
      case 'pink':
        return '#342747;';
      default:
        return 'var(--card-default-color);';
    }
  }};
  border-radius: 12px;

  padding: 10px 12px;

  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: var(--card-default-color);

  overflow: hidden;

  border-radius: 50%;
`;

export const Value = styled.span`
  font-size: 68px;

  user-select: none;

  font-family: 'Archivo Black', sans-serif;
`;