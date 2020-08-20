import styled from 'styled-components';

export const Container = styled.div`
  padding-left: var(--sidebar-width);

  /* background: #f5f5f5; */
  background: #eaeaea;

  height: 100%;
  overflow: hidden;

  @media only screen and (max-width: 780px) {
    padding-left: 0 !important;
    padding-top: var(--header-height) !important;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "secondary secondary secondary"
    "third cards fourth"
    "primary primary primary";
  
  height: 100%;

  grid-template-columns: 300px 1fr 300px;
  grid-template-rows: 18% 42% 40%;
`;

export const PositionUser = styled.div`
`;

export const CardsArea = styled(PositionUser)`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: cards;
`;

export const Primary = styled(PositionUser)`
  grid-area: primary;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin-top: 58px;

  overflow: auto;

  @media only screen and (max-width: 780px) {
    justify-content: flex-start;
  }
`;

export const Secondary = styled(PositionUser)`
  grid-area: secondary;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  transform: scale(0.8);

  height: 100% !important;
`;

export const Third = styled(PositionUser)`
  grid-area: third;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  width: 55% !important;

  height: 100%;

  margin-left: -24px;

  transform: scale(0.7);
`;

export const Fourth = styled(PositionUser)`
  grid-area: fourth;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  width: 100% !important;

  margin-left: 45px;

  transform: scale(0.7);
`;