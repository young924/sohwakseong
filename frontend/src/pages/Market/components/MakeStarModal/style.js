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
    font-size: 2.2rem;
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
  width: 25rem;
  > p {
    margin: 0 0 0.6rem 0;
    text-align: left;
    font-weight: 700;
    padding-left: 0.2rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.6rem 0 1.6rem 1rem;
  border: 0.1rem solid #0A0B16;
  border-radius: 0.8rem;
  background-color: #E6E7E8;
  font-size: 1.4rem;

  &::focus-visible {
    border: none;
  }
`;

export const EmojiInput = styled.div`
  width: 100%;
  padding: 1.4rem 0 1.4rem 1rem;
  border: 0.1rem solid #0A0B16;
  border-radius: 0.8rem;
  background-color: #E6E7E8;
  text-align: left;
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
`;
