import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  > h2 {
    font-size: 2rem;
    margin: 0;
  }
`;

export const ConfirmButton = styled.div`
  max-width: 100%;
  width: fit-content;
  height: 4.4rem;
  padding: 0 4rem;
  border-radius: 2.2rem;
  background-color: black;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.6rem;
  border: 1px solid #b3b3b3;

  border-radius: 1.2rem;
`;
