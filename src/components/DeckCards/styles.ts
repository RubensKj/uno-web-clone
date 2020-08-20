import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 100px;

  height: 100%; 

  transform: rotateZ(58deg);

  cursor: pointer;

  transition: 0.2s margin, transform;

  @media only screen and (max-width: 1380px) {
    margin-left: 70px;
  }

  @media only screen and (max-width: 1050px) {
    margin-left: 52px;
    transform: rotateZ(82deg);
  }

  @media only screen and (max-width: 850px) {
    margin-left: 52px;
    transform: rotateZ(82deg);
  }

  @media only screen and (max-width: 680px) {
    margin-left: 48px;
    transform: rotateZ(82deg);
  }

  @media only screen and (max-width: 580px) {
    margin-left: 42px;
    transform: rotateZ(82deg);
  }

  @media only screen and (max-width: 325px) {
    margin-left: 22px;
    transform: rotateZ(90deg);
  }

  @media only screen and (max-width: 300px) {
    margin-left: 12px;
    transform: rotateZ(90deg);
  }
`;
