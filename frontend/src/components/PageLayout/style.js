import styled, { keyframes } from "styled-components";

const starAnim = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.2;
    }
    100% {
        opacity: 1;
    }
`;

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  background: #151515;
  overflow: hidden;

  div.star {
    width: 2px;
    height: 2px;
    border-radius: 6px;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7),
      0 0 5px rgba(255, 255, 255, 0.7);
    animation: linear infinite ${starAnim};
    opacity: 1;
  }
`;
