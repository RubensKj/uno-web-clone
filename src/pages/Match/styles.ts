import styled from 'styled-components';

export const Container = styled.div`
  padding-left: var(--sidebar-width);

  /* background: #f5f5f5; */
  background: #eaeaea;

  height: 100%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "secondary secondary secondary"
    "third cards fourth"
    "primary primary primary";
  
  height: 100%;
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
`;

export const Secondary = styled(PositionUser)`
  grid-area: secondary;

  height: 55% !important;
`;

export const Third = styled(PositionUser)`
  grid-area: third;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Fourth = styled(PositionUser)`
  grid-area: fourth;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;