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
