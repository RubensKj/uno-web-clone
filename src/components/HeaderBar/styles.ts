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

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      padding: 10px 15px;

      cursor: pointer;

      & + li {
        margin-top: 15px;
      }

      a {
        text-decoration: none;
        color: initial;
      }

      transition: 0.15s transform;

      :hover {
        transform: translateY(-1px);
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