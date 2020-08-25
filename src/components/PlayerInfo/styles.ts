import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #FFF;

  border-radius: 6px;

  padding: 8px;

  box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.15);

  transition: 0.2s padding;

  @media only screen and (max-width: 850px) {
    padding: 7px;
  }

  @media only screen and (max-width: 580px) {
    padding: 6px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 8px;
    }

    span {
      margin-left: 3px;
    }
  }

  transition: 0.2s font;

  @media only screen and (max-width: 850px) {
    div {
      svg {
        width: 14px !important;
        height: 14px !important;

        margin-left: 4px;
      }

      span {
        font-size: 12px;
      }
    }
  }

  @media only screen and (max-width: 580px) {
    padding: 3px;

    div {
      span {
        font-size: 13px;

        line-height: 0.1;

        font-weight: 500;
      }
    }
  }
`;

export const Username = styled.div`
  margin-top: -4px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 5px 5px 0;
  background: #FFF;

  border-top: 1px solid #ecebed;

  width: 100%;

  div {
    overflow: hidden;

    max-width: 100px;

    white-space: nowrap;
    text-overflow: ellipsis;

    span {
      font-size: 14px;

      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  transition: 0.2s padding, margin;

  @media only screen and (max-width: 850px) {
    margin-top: -2px;

    div {
      max-width: 72px;
    }
  }

  @media only screen and (max-width: 580px) {
    margin-top: 3px;

    padding: 0px 2px 0;

    div {
      max-width: 58px;
    }
  }
`;

export const AvatarArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  max-width: 56px;
  max-height: 52px;

  width: 100%;
  height: 100%;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  transition: 0.2s max-width, max-height;

  @media only screen and (max-width: 850px) {
    max-width: 38px;
    max-height: 36px;
  }

  @media only screen and (max-width: 580px) {
    max-width: 28px;
    max-height: 26px;
  }
`;