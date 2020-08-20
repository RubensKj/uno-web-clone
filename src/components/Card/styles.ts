import styled from 'styled-components';

interface Props {
  classForValue?: string;
  color?: string;
}

export const Container = styled.div<Props>`
  background: var(--card-default-color);
  border: 1px solid #ecebed;

  padding: 12px;

  width: 100%;
  max-width: 205px;
  min-width: 205px;

  max-height: 285px;
  height: 100%;

  border-radius: 12px;

  overflow: hidden;
  user-select: none;

  z-index: 2;
`;

export const ColorAndNumber = styled.div<Props>`
  display: flex;

  background: ${props => {
    switch (props.color) {
      case 'yellow':
        return 'var(--card-yellow-color);';
      case 'blue':
        return 'var(--card-blue-color);';
      case 'red':
        return 'var(--card-red-color);';
      case 'green':
          return 'var(--card-green-color);';
      default:
        return 'var(--card-default-color);';
    }
  }};
  border-radius: 12px;

  padding: 15px 18px;

  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  position: absolute;
`;

export const HigherValue = styled.div`
  position: relative;

  span {
    color: #fff;

    font-size: 24px;

    font-family: 'Archivo Black', sans-serif;
  }
`;

export const TopValue = styled(HigherValue)`
  top: 5px;
  left: 8px;
`;

export const BottomValue = styled(HigherValue)`
  left: 148px;
  bottom: -189px;
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

  font-family: 'Archivo Black', sans-serif;
`;