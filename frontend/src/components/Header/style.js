import styled from "styled-components";

export const HeaderBoard = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  /* z-index: 999; */

  width: 100%;
  max-width: 420px;
  height: 4.8rem;
  padding: 1.2rem 1.6rem;
  z-index: 20;
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
  background: none;
`;

export const HeaderWhiteSpace = styled.div`
  width: 100%;
  height: 4.8rem;
  background: none;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1.6rem;
`;

export const IconBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  width: 2.4rem;
  height: 2.4rem;

  cursor: pointer;
`;

export const SearchBox = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 1.6rem;
  right: 0;
  left: 346px;
  margin: auto;
  z-index: 10000;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  > svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
