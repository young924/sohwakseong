import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E6E7E8;
  gap: 1.6rem;
  padding: 1rem;
  border-radius: 2.5rem;

  > h2 {
    margin: 0;
    font-size: 2.2rem;
    padding: 1rem 0;
  }
`;

export const ImoticonContainer = styled.div`
  width: 20rem;
  height: 13.6rem;
  background-color: #F5F5F5;
  border-radius: 1rem;
  box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.23);
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  `

export const ImoticonHolder = styled.div`
  background-color: #FFFFFF;
  box-shadow: 0px 0px 14px -7px #000000;
  width: 6rem;
  height: 6rem;
  border-radius: 5rem;
  margin: 0;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  `

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
  padding: 1.6rem;
  border: 0.1rem solid #0A0B16;
  border-radius: 1.2rem;
  background-color: #E6E7E8;

  &::focus-visible {
    border: none;
  }
`;