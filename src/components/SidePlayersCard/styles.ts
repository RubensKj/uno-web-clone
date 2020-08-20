import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 45%;

  /* margin-left: 58px; */
  padding-top: 24px;

  @media only screen and (max-width: 780px) {
    margin-left: 0px;
  }
`;
