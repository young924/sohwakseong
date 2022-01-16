import styled from "styled-components";

export const CalendarWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem;
  position: relative;
  z-index: 10000;
  .react-calendar {
    width: 100%;
    border-radius: 2rem;
    padding: 1.2rem;
  }
  .react-calendar__navigation {
    height: 1.6rem;
  }
  .react-calendar__navigation__label__labelText {
    font-size: 1.6rem;
  }
  .react-calendar__tile {
    border-radius: 2rem;
  }
  .react-calendar__tile--now {
    background-color: lemonchiffon;
  }
  .react-calendar__tile--active {
    &:active,
    &:enabled,
    &:hover {
      background-color: #979fe1 !important;
    }
  }
`;

export const Background = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  max-width: 420px;
  background-color: #e6e7e8;
  opacity: 0.6;
  height: calc(100vh - 400px);
`;

export const StarsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  max-width: 420px;
  height: calc(100vh - 400px);
  color: black;

  > .stars {
    width: 100%;
    opacity: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: scroll;
    border-top: 0.2rem solid white;

    > .star {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 2rem;
      width: 100%;
      height: 8rem;
      border-bottom: 0.2rem solid white;
      border-radius: 0;
      background-color: transparent;

      > .star-content {
        display: flex;
        align-items: center;
        font-size: 2rem;

        .star-emoticon {
          width: 4rem;
          height: 4rem;
          background-color: white;
          padding: 1rem;
          line-height: 2rem;
          border-radius: 2rem;
        }
        .star-title {
          padding-left: 2rem;
          font-weight: 600;
        }
        .star-count {
          color: white;
          font-size: 1.5rem;
          padding-left: 1rem;
        }
      }

      > .icon {
        width: 3rem;
      }
    }
  }
`;
