import styled from "styled-components";

export const HeaderBoard = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 420px;
  height: 5.2rem;
  padding: 1.2rem 1.6rem;
  z-index: 20;
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
  background: none;
`;

export const HeaderWhiteSpace = styled.div`
  width: 100%;
  height: 5.2rem;
  background: none;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > h1 {
    font-size: 2rem;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.82);
    margin: 0.4rem 0 0 0;
  }
`;

export const IconBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  > svg {
    width: 2.8rem;
    height: 2.8rem;
  }
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
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const HomeBox = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 1.2rem;
  left: 0;
  right: 346px;
  margin: auto;
  z-index: 10000;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  > svg {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const FixedTitle = styled.h1`
  position: fixed;
  top: 1.2rem;
  width: 100%;
  max-width: 420px;
  text-align: center;
  font-size: 2rem;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.82);
  margin: 0.4rem 0 0 0;
  z-index: 10000;
  color: #ffff;
`;

export const FixedContainer = styled.div``;
