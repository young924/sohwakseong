import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 0;
  background-color: #53545c;
  border-radius: 4rem 4rem 0 0;
  opacity: 0;
  transition: all 0.45s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      height: 70vh;
      opacity: 0.7;
    `}
`;
