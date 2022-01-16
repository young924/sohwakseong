import styled, { css } from "styled-components";

export const makeStarHotspot = (hotSpotDiv, args) => {
  const starDiv = document.createElement("div");
  starDiv.classList.add("star");
  hotSpotDiv.appendChild(starDiv);
  starDiv.style.width = "2rem";
  starDiv.style.height = "2rem";
  starDiv.style.boxShadow = "0px 0px 6px 2px #8A8686";
  starDiv.style.backgroundColor = "#8A8686";
  starDiv.style.borderRadius = "50%";
  const line = document.createElement("div");
  line.classList.add("line");
  hotSpotDiv.appendChild(line);
  const starInfo = document.createElement("p");
  starInfo.innerHTML = args.title;
  hotSpotDiv.appendChild(starInfo);
  starInfo.style.visibility = "hidden";
  const achvRate = document.createElement("p");
  achvRate.classList.add("achv_rate");
  achvRate.innerHTML = `(성취율 ${args.achvRate}%)`;
  starInfo.appendChild(achvRate);
  achvRate.style.visibility = "hidden";
};

export const StarContainer = styled.div`
  div.pnlm-dragfix {
    cursor: pointer;
  }

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
      visibility: visible !important;
      background: rgba(255, 255, 255, 0.2);
      font-weight: 500;
      width: fit-content;
      border-radius: 1.5rem;
      color: white;
      padding: 1rem;
      margin: 0;
      margin-top: 2rem;
      margin-left: -3.5rem;
      z-index: 100000;

      > p {
        font-weight: 700;
        margin: 0;
        color: white;
        visibility: visible !important;
        text-align: center;
      }
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
    ${({ isOpen }) =>
      isOpen &&
      css`
        &:last-child {
          > div.star {
            background-color: #db83ff !important;
            z-index: 100000000000;
          }
        }
      `}
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
      visibility: visible !important;
      background: rgba(255, 255, 255, 0.2);
      font-weight: 500;
      width: fit-content;
      border-radius: 1.5rem;
      color: white;
      padding: 1rem;
      margin: 0;
      margin-top: 2rem;
      margin-left: -3.5rem;
      z-index: 100000;

      > p {
        font-weight: 700;
        margin: 0;
        color: white;
        visibility: visible !important;
        text-align: center;
      }
    }
  }
`;
