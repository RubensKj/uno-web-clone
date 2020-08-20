import styled from 'styled-components';

interface Props {
  size?: number;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  overflow-x: auto;

  padding-left: 24px;

  transition: 0.2s padding;

  @media only screen and (max-width: 850px) {
    padding-left: 18px;
    padding-right: 18px;
  }

  @media only screen and (max-width: 580px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const Wrapper = styled.div<Props>`
  display: flex;
  justify-content: ${props => props.size !== undefined && props.size <= 8 ? 'center;' : 'flex-start;'};
  align-items: flex-end;

  width: 100%;
  height: 100%;

  padding-left: 24px;
  padding-right: 24px;

  overflow-x: auto;
  overflow-y: hidden;

  transition: 0.2s justify-content;

  .user-card {
    margin-right: -130px;

    transition: 0.2s transform, margin-right;

    cursor: pointer;

    /* Rotating Cards */
    ${props => {
        if (props.size === undefined) {
          return;
        }

        if (props.size >= 5 && props.size <= 7) {
          return ':nth-child(1) { transform: rotateZ(-8deg) translateY(4px); }; ' +
            ':nth-child(2) { transform: rotateZ(-4deg) translateY(4px);}; ' +
            ':nth-last-child(1) { transform: rotateZ(4deg) translateY(2px); };' +
            ':nth-last-child(2) { transform: rotateZ(4deg) translateY(2px); };';
        }
        if (props.size > 7 && props.size <= 10) {
          return ':nth-child(1) { transform: rotateZ(-8deg) translateY(12px); }; ' +
            ':nth-child(2) { transform: rotateZ(-6deg) translateY(4px);}; ' +
            ':nth-child(3) { transform: rotateZ(-4deg) translateY(4px);}; ' +
            ':nth-last-child(1) { transform: rotateZ(4deg) translateY(12px); };' +
            ':nth-last-child(2) { transform: rotateZ(4deg) translateY(4px); };' +
            ':nth-last-child(3) { transform: rotateZ(4deg) translateY(4px); };';
        }
      }
    }

    
    :hover {
      transform: translateY(-18px);
    }

    @media only screen and (max-width: 850px) {
      margin-right: -70px;
    }

    @media only screen and (max-width: 580px) {
      margin-right: -40px;
    }
  }

  @media only screen and (max-width: 950px) {
    justify-content: flex-start;
  }
`;
