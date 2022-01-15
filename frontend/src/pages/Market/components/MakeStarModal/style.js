import styled from "styled-components";

export const Container = styled.section`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  > h2 {
    margin-top: 0;
  }
  > svg {
    cursor: pointer;
    > g > circle {
      &:hover {
        fill: #eceda8;
      }
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  > p {
    margin: 0 0 0.6rem 0;
    text-align: left;
    font-weight: 500;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.6rem;
  border: none;
  border-radius: 1.2rem;

  &::focus-visible {
    border: none;
  }
`;

export const EmojiInput = styled.div`
  width: 100%;
  padding: 1.6rem;
  border: none;
  border-radius: 1.2rem;
  background-color: #ffff;
  text-align: left;
  margin-bottom: 0.4rem;
`;
