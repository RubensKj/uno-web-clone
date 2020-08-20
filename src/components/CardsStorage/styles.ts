import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 315px;

  height: 100%;

  z-index: 2;

  transform: scale(0.81);

  .scale-0 {
    transform: skew(0deg);
  }

  .scale-1 {
    transform: skew(-5deg) translateY(8px);
  }

  .scale-2 {
    transform: skew(3deg) translateY(-3px) translateX(-8px);
  }

  .scale-3 {
    transform: skew(-2deg) translateY(5px) translateX(8px);
  }

  .scale-4 {
    transform: skew(2deg) translateY(-7px) translateX(8px);
  }
`;

export const Table = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 315px;
  max-height: 315px;

  height: 100%;

  background: var(--table-color);

  border-radius: 50%;

  z-index: -99;

  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.1);
`;

export const CardArea = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  width: 100%;
  height: 100%;
`;
