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
  min-height: 285px;
  height: 100%;

  border-radius: 10px;

  overflow: hidden;
  user-select: none;

  z-index: 2;

  transition: 0.2s width, height, padding;

  @media only screen and (max-width: 850px) {
    max-width: 135px;
    min-width: 130px;

    max-height: 205px;
    min-height: 205px;

    padding: 8px;

    border-radius: 8px;
  }

  @media only screen and (max-width: 580px) {
    max-width: 80px;
    min-width: 80px;

    max-height: 121px;
    min-height: 121px;

    padding: 5px;

    border-radius: 6px;
  }
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

  transition: 0.2s padding;

  @media only screen and (max-width: 850px) {
    padding: 28px 16px;
  }

  @media only screen and (max-width: 580px) {
    padding: 20px 12px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const HigherValue = styled.div`
  position: absolute;

  span {
    color: #fff;

    font-size: 24px;

    font-family: 'Archivo Black', sans-serif;

    @media only screen and (max-width: 850px) {
      font-size: 18px;
    }

    @media only screen and (max-width: 580px) {
      font-size: 16px;
    }
  }
`;

export const TopValue = styled(HigherValue)`
  top: 5px;
  left: 8px;

  @media only screen and (max-width: 850px) {
    top: 2px;
    left: 7px;
  }

  @media only screen and (max-width: 580px) {
    top: -1px;
    left: 5px;
  }
`;

export const BottomValue = styled(HigherValue)`
  left: 154px;
  bottom: -257px;

  @media only screen and (max-width: 850px) {
    left: 86px;
    bottom: -187px;
  }

  @media only screen and (max-width: 580px) {
    left: 54px;
    bottom: -110px;
  }
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

  transition: 0.2s font-size;

  @media only screen and (max-width: 850px) {
    font-size: 42px;
  }

  @media only screen and (max-width: 580px) {
    font-size: 35px;
  }
`;