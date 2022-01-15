import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 0;
  background-color: #53545c;
  border-radius: 4rem 4rem 0 0;
  opacity: 0;
  transition: all 0.45s ease-in-out;

  ${({ isMount }) =>
    isMount &&
    css`
      height: 70vh;
      opacity: 0.85;
    `}
`;

export const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const Tab = styled.div`
  opacity: 0.7;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 1.8rem;
  padding: 2.4rem;
  padding-bottom: 1.4rem;
  cursor: pointer;

  ${({ isComplete }) =>
    isComplete &&
    css`
      border-bottom: 2px solid #ffff;
      font-weight: 700;
      opacity: 1;
    `}
`;

export const Notice = styled.p`
  position: absolute;
  bottom: 1.2rem;
  width: 100%;
  margin: 0;
  text-align: center;
  font-size: 1.4rem;
  color: #ffd57c;
  opacity: 1;
  transition: all 0.5s linear;
  ${({ isNoticeOn }) =>
    !isNoticeOn &&
    css`
      opacity: 0;
    `};
`;
