import styled from 'styled-components';

export const Container = styled.div`
  padding-left: var(--sidebar-width);

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
    "third packCards fourth"
    "third cards fourth"
    "primary primary primary"
    "primary primary primary";
  
  height: 100%;

  transition: 0.2s grid-template-rows;

  grid-template-columns: 448px auto 448px;
  grid-template-rows: 18% 155px 254px auto;

  @media only screen and (max-width: 1520px) {
    grid-template-columns: 348px auto 348px;
    grid-template-rows: 18% 155px 254px auto;
  }

  @media only screen and (max-width: 1260px) {
    grid-template-columns: 248px auto 248px;
    grid-template-rows: 18% 155px 254px auto;
  }

  @media only screen and (max-width: 850px) {
    grid-template-columns: 191px auto 191px;
    grid-template-rows: 18% 86px 273px auto;
  }

  @media only screen and (max-width: 580px) {
    grid-template-columns: 91px auto 91px;
    grid-template-rows: 18% 86px 160px auto;
  }
`;

export const GridArea = styled.div`
  border: 1px solid red;
`;

export const DeckArea = styled(GridArea)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  grid-area: packCards;
`;

export const CardsArea = styled(GridArea)`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: cards;
`;

export const TopGuyArea = styled(GridArea)`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  grid-area: secondary;
`;

export const LeftGuyArea = styled(GridArea)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  grid-area: third;
`;

export const RightGuyArea = styled(GridArea)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  grid-area: fourth;
`;

export const PlayerGuyArea = styled(GridArea)`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 100%;

  overflow: auto;

  grid-area: primary;
`;