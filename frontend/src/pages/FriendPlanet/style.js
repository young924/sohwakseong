import styled, { css } from "styled-components";

export const Container = styled.div`
  .done {
    > div.star {
      background-color: #e3e088 !important;
      transition: all 0.1s linear;

      &:hover {
        width: 3rem !important;
        height: 3rem !important;
      }
    }
  }

  .${({ clickedIndex }) => `done${clickedIndex}`} {
    > div.star {
      width: 3rem !important;
      height: 3rem !important;
      filter: drop-shadow(0px 0px 1.5rem rgba(255, 255, 255, 1));
    }

    > div.line {
      width: 1px;
      height: 2rem;
      border-right: 1px dotted #ffffff;
      background-color: white;
      left: 1.5rem;
      position: absolute;
    }

    > p {
      display: block !important;
      background: rgba(0, 0, 0, 0.5);
      width: fit-content;
      border-radius: 1.5rem;
      color: white;
      padding: 1rem;
      margin: 0;
      margin-top: 2rem;
      margin-left: -2rem;
      z-index: 100000;
    }
  }

  .ing {
    > div.star {
      background-color: #8a8686 !important;
      transition: all 0.1s linear;

      &:hover {
        width: 3rem !important;
        height: 3rem !important;
      }
    }
  }

  .${({ clickedIndex }) => `ing${clickedIndex}`} {
    > div.star {
      width: 3rem !important;
      height: 3rem !important;
      filter: drop-shadow(0px 0px 1.5rem rgba(255, 255, 255, 1));
    }

    > div.line {
      width: 1px;
      height: 2rem;
      border-right: 1px dotted #ffffff;
      background-color: white;
      left: 1.5rem;
      position: absolute;
    }

    > p {
      display: block !important;
      background: rgba(0, 0, 0, 0.5);
      width: fit-content;
      border-radius: 1.5rem;
      color: white;
      padding: 1rem;
      margin: 0;
      margin-top: 2rem;
      margin-left: -2rem;
      z-index: 100000;
    }
  }
`;
