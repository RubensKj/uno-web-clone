import styled from 'styled-components';

interface Props {
  isMe?: boolean;
  isMyTurn?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5px 15px;

  margin-bottom: 24px;
  margin-top: 24px;

  span {
    color: #fff;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  @media only screen and (max-width: 780px) {
    display: ${props => props.isMe ? 'none;' : 'flex;'};
  }
`;

export const LevelArea = styled.div`
  position: absolute;
`;

export const UserLevel = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f65c78;

  top: -55px;
  right: 35px;

  border-radius: 18px;
  padding: 5px 12px;
`;

export const BorderAvatar = styled.div<Props>`
  border: 1.3px solid ${props => props.isMyTurn ? '#91d18b;' : '#effffb;'};

  padding: 8px;

  border-radius: 50%;
`;

export const AvatarArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 90px;
  min-width: 90px;
  max-height: 85px;
  min-height: 85px;

  width: 100%;
  height: 100%;

  background: #d8d8d8;

  border-radius: 50%;

  overflow: hidden;
`;

export const Avatar = styled.img`
  max-width: 90px;
  max-height: 85px;

  width: 100%;
  height: 100%;
`;

export const LabelUsername = styled.div`
  background: #f65c78;

  padding: 5px 15px;

  border-radius: 12px;

  margin-top: -18px;

  max-width: 150px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  animation: Rotating 2s infinite;
  animation-direction: alternate;

  @keyframes Rotating {
    0% {
      transform: rotateZ(2deg);
    }
    100% {
      transform: rotateZ(-4deg);
    }
  }
`;