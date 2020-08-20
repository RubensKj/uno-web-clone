import styled from 'styled-components';

interface Props {
  size: number;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-left: 58px;
  padding-top: 24px;

  overflow-y: hidden;

  @media only screen and (max-width: 780px) {
    margin-left: 0px;
  }
`;

export const Container = styled.div<Props>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-left: 58px;
  padding-top: 50px;

  overflow-y: hidden;

  ${props => {
    if (props.size >= 8) {
      return 'padding-right: 28px;' +
        'padding-left: 28px;';
    }

    if (props.size >= 28) {
      return 'transform: scale(0.91);' +
        'justify-content: flex-start;' +
        'padding-left: 28px;' +
        'padding-right: 28px;' +
        'margin-left: 28px;' +
        'margin-right: 2px;' +
        'overflow-x: auto;';
    }
  }}

  @media only screen and (max-width: 780px) {
    margin-left: 0;
    margin-right: 0;

    ${props => {
      if (props.size > 20) {
        return 'transform: scale(0.81);' +
          'padding-left: 28px;' +
          'padding-right: 28px;' +
          'padding-bottom: 8px;' +
          'margin-left: -38px;' +
          'overflow-x: auto;' +
          'overflow-y: hidden;';
      }
    }}
  }

  .user-card {
    margin-right: -138px;
    transform: translateY(2px);

    transition: 0.2s transform, margin-right;

    cursor: pointer;

    ${props => {
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
  }
`;
