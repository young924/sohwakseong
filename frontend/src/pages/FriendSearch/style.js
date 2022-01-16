import styled, { css } from "styled-components";

export const UsersContainer = styled.div`
  padding: 2rem 4rem;
  > .user-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.9);
    color: black;
    border-radius: 2rem;
    margin-bottom: 2rem;
    overflow: scroll;
    cursor: pointer;

    > .user-content {
      display: flex;

      > .user-nickname {
        font-weight: 600;
        font-size: 2rem;
        margin-left: 1rem;
      }
    }
  }
`;

export const NoResult = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  > .no-result {
    align-content: center;
    padding: 40vh 0;
    font-size: 2rem;
    font-weight: 500;
    color: white;
  }
`;

export const UserContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 4.8rem;
    height: 4.8rem;
  }
`;
