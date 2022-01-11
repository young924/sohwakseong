import styled, { createGlobalStyle } from "styled-components";

const GlobalStyleWrapper = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    padding: 0;
    margin: 0;
    font-size: 10px;
    @media screen and (max-width: 385px) {
      font-size: 8.75px;
    }
    @media screen and (max-width: 361px) {
      font-size: 8.125px;
    }
    @media screen and (max-width: 321px) {
      font-size: 7.5px;
    }
  }
 

  body { 
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const Container = styled.div`
  position: relative;

  @media (min-width: 420px) {
    background-color: lemonchiffon;
  }
`;

const Body = styled.div`
  max-width: 420px;
  margin: 0 auto;
  background-color: white;

  min-height: 100vh;
`;

function GlobalStyle({ children }) {
  return (
    <>
      <GlobalStyleWrapper />
      <Container>
        <Body>{children}</Body>
      </Container>
    </>
  );
}

export default GlobalStyle;
