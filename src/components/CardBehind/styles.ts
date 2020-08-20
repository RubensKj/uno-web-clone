import styled from 'styled-components';

export const Container = styled.div`
  background: var(--card-default-color);
  border: 1px solid #ecebed;

  padding: 8px;

  width: 100%;
  max-width: 135px;
  min-width: 130px;

  max-height: 182px;
  min-height: 182px;
  height: 100%;

  border-radius: 10px;

  overflow: hidden;
  user-select: none;

  z-index: 2;

  transition: 0.2s width, height, padding;

  @media only screen and (max-width: 1050px) {
    max-width: 105px;
    min-width: 100px;

    max-height: 142px;
    min-height: 142px;

    padding: 8px;

    border-radius: 8px;
  }

  @media only screen and (max-width: 850px) {
    max-width: 105px;
    min-width: 100px;

    max-height: 142px;
    min-height: 142px;

    padding: 8px;

    border-radius: 8px;
  }

  @media only screen and (max-width: 680px) {
    max-width: 80px;
    min-width: 80px;

    max-height: 105px;
    min-height: 105px;

    padding: 5px;

    border-radius: 6px;
  }

  @media only screen and (max-width: 325px) {
    max-width: 70px;
    min-width: 70px;
    
    max-height: 85px;
    min-height: 85px;

    padding: 4px;

    border-radius: 5px;
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: var(--card-behind-color);

  border-radius: 6px;
`;
