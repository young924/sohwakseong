import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 9.3rem;
    height: 6rem;
  }
`;
