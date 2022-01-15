import styled from 'styled-components';

export const Container = styled.div`
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InnerContainer = styled.div`
  height: 5rem;
  width: 38rem;
  border: 0.2rem solid #F2EAA9;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  padding: 1.2rem;

  > svg {
    &:hover {
      circle {
        stroke: #878564fc
      }
      line {
        stroke: #878564fc
      }
    }
  }
`;

export const Input = styled.input`
    margin-left: 1.2rem;
    color: #F2EAA9;
    font-size: 1.8rem;
    background: transparent;
    border: none;
    width: 32rem;
    outline: none;
`