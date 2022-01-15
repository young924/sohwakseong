import styled, { css } from "styled-components";

export const Container = styled.section`
  position: fixed;
  z-index: 1000000;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 420px;
  margin: auto;

  > img {
    ${({ clickedIndex }) => css`
      &:nth-child(${clickedIndex}) {
        filter: drop-shadow(0px 0px 2rem rgba(255, 255, 255, 1));
      }
    `}

    ${({ clickedIndex }) =>
      clickedIndex === 1 &&
      css`
        &:nth-child(${clickedIndex}) {
          top: 0rem;

          filter: drop-shadow(0px 0px 1rem rgba(255, 255, 255, 1));
        }
      `}
  }
`;

export const Prince = styled.img`
  width: 17rem;
  z-index: 100;
  height: 15.6rem;
  bottom: 13.5rem;
  margin: auto;
  left: 0rem;
  right: 15rem;
  position: absolute;

  transition: all 0.2s linear;
`;

export const Fox = styled.img`
  width: 9.5rem;
  z-index: 100;
  height: 11.4rem;
  bottom: 13rem;
  margin: auto;
  right: 0;
  left: 15rem;
  position: absolute;

  transition: all 0.2s linear;
`;

export const Star = styled.img`
  width: 5.4rem;
  height: 21.3rem;
  top: -1rem;
  margin: auto;
  right: 0;
  left: 250px;
  position: fixed;
  transition: all 0.2s linear;
`;

export const Planet = styled.img`
  width: 100%;
  height: 16rem;
  bottom: 0;
  /* left: 0;
  right: 0;
  margin: auto; */
  position: absolute;
`;
