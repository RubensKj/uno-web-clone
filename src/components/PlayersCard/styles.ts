import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 45%;

  margin-left: 58px;
  padding-top: 24px;

  @media only screen and (max-width: 780px) {
    margin-left: 0px;

    width: 100%;
  }
`;
