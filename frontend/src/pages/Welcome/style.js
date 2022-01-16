import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  > img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center 20%;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 4rem;
  margin: auto;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Button = styled.div`
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  width: 80%;
  padding: 1.6rem;
  font-size: 2rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;
