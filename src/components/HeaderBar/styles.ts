import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: var(--sidebar-width);
  height: 100%;

  border-right: 1.3px solid #ecebed;

  background: #fafbff;

  z-index: 999;

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      padding: 10px 15px;

      cursor: pointer;

      text-decoration: none;
      color: initial;

      & + a {
        margin-top: 15px;
      }

      transition: 0.15s transform;

      :hover {
        transform: translateY(-1px);
      }
    }
  }

  @media only screen and (max-width: 780px) {
    flex-direction: row !important;
    width: 100%;
    height: var(--header-height) !important;

    border-right: 0;
    border-bottom: 1.3px solid #ecebed;

    ul {
      flex-direction: row !important;

      a {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 0 !important;
        margin-right: 15px !important;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;

export const IconArea = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 15px;
  margin-top: 8px;

  cursor: pointer;

  transition: 0.15s transform;

  :hover {
    transform: translateY(-1px);
  }
`;

export const AvatarArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 100%;

  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Avatar = styled.img`
  max-width: 54px;
  min-width: 49px;
  width: 100%;

  max-height: 49px;
  min-height: 42px;

  padding: 8px 10px;

  border-radius: 50%;
`;