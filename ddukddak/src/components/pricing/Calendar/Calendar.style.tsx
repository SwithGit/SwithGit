import styled from "styled-components";

export const ModalOverlay = styled.div`
  font-family: Pretendard;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 350px;
  z-index: 1001;
  position: relative;
  background-color: white;
  width: 332px;
  height: 508px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 6px 24px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CalendarTitle = styled.h2`
  font-size: 20px;
  color: #454545;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const CalendarWrapper = styled.div`
  .react-calendar {
    border: none;
    border-radius: 0.5rem;
  }

  .react-calendar__month-view {
    abbr {
      color: #454545;

      font-family: "Pretendard", sans-serif !important;
    }
  }

  .react-calendar__navigation {
    justify-content: center !important;
  }

  .react-calendar__navigation button {
    font-weight: 800 !important;
    font-size: 1rem !important;
  }

  .react-calendar__navigation button:focus {
    background-color: white !important;
  }

  .react-calendar__navigation button:disabled {
    background-color: white !important;
  }

  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  //일월화수목금토
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    /* font-weight: 800; */
  }

  .selected-between {
    background-color: #ffe0b2 !important; /* 시작과 끝 사이의 날짜 */
    color: #000 !important;
    abbr {
      color: #454545;
      background-color: red !important; /* 끝나는 날짜 */
      font-family: "Pretendard", sans-serif !important;
    }
  }

  .react-calendar__month-view__weekdays__weekday:first-child abbr {
    color: #f53030 !important;
  }

  .react-calendar__month-view__weekdays__weekday:last-child abbr {
    color: #4a7cfe !important;
  }

  .react-calendar__tile--now {
    background: none !important;
    /* font-size: 50px; */
    abbr {
      color: ${(props) => props.theme.primary_2} !important;
    }
  }

  .react-calendar__year-view__months__month {
    border-radius: 0.8rem !important;
    padding: 0 !important;
  }

  .react-calendar__tile {
    width: 38px !important;
    height: 35px !important;
    padding: 0 !important;
    margin: 4px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
    &:hover {
      background-color: red;
      color: white !important;
      /* font-weight: bold !important; */
    }
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr) !important;
    grid-gap: 0 !important;
    gap: 0 !important;
  }

  .react-calendar__year-view__months__month {
    flex: 0 0 calc(33.3333% - 10px) !important;
    margin-inline-start: 5px !important;
    margin-inline-end: 5px !important;
    margin-block-end: 10px !important;
    padding: 20px 6.6667px !important;
    font-size: 0.8rem !important;
    font-weight: 600 !important;
  }

  //실제 지정
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    border-radius: 0.3rem !important;
    border: 1px solid #fff7e4 !important;
    /* font-weight: bold !important; */
    abbr {
      color: #454545 !important;
      border: 11px solid #fff7e4 !important;
      /* background: #fff7e4; */
    }
  }

  .react-calendar__tile.selected {
    abbr {
      color: white !important;
    }
  }
  .react-calendar__tile.disabled,
  .react-calendar__tile.past {
    background-color: #e6e6e6 !important;
    pointer-events: none !important;
    color: #c4c4c4;
    border: 11px solid #e6e6e6 !important;
    abbr {
      border: 11px solid #e6e6e6 !important;
      background-color: #e6e6e6 !important;
    }
  }

  .react-calendar__tile--neighboringMonth {
    background-color: white !important;
    color: #c4c4c4 !important;
  }

  .react-calendar__tile.disabled.react-calendar__tile--sunday,
  .react-calendar__tile.past.react-calendar__tile--sunday {
    background-color: #f53030;

    abbr {
      color: #f53030 !important;
    }
  }

  .react-calendar__tile.disabled.react-calendar__tile--saturday,
  .react-calendar__tile.past.react-calendar__tile--saturday {
    abbr {
      color: #4a7cfe !important;
    }
  }
  .react-calendar__tile--holiday,
  .react-calendar__tile.disabled {
    color: red !important;
    border: 1px solid #454545;
    abbr {
      background-color: white;
      border: 11px solid white;
      background-color: white;
      color: red !important;
    }
  }
  .react-calendar__tile:not(.react-calendar__tile--holiday) {
    background-color: white !important;

    border: 1px solid #454545;
  }

  .react-calendar__tile:not(.react-calendar__tile.disabled) {
    background-color: white !important;
    border: 1px solid #454545;
  }

  .react-calendar__tile {
    border-radius: 0.3rem !important;
  }

  .react-calendar__tile--neighboringMonth {
    background-color: red !important; /* 회색 배경 */
    color: #c4c4c4 !important; /* 텍스트 색상 변경 */
  }

  .react-calendar__tile--sunday {
    background-color: #e6e6e6;

    border: 1px solid #454545;
    abbr {
      background-color: white;

      color: #f53030 !important;
    }
  }

  .react-calendar__tile--saturday {
    abbr {
      color: #4a7cfe !important;
    }
  }

  /* 요일 헤더 간격 조정 */
  .react-calendar__month-view__weekdays {
    display: flex !important;
    justify-content: center !important;
    grid-template-columns: repeat(7, 1fr) !important;
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center !important;
  }

  .react-calendar__tile--holiday {
    background-color: #ffe6e6 !important;
    color: #ff4d4d !important;
  }
  .selected-range {
    color: white !important;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active,
  /* .react-calendar__tile--start-date.react-calendar__tile--active,
  .react-calendar__tile--end-date.react-calendar__tile--active, */
  .react-calendar__tile--middle-date.react-calendar__tile--active {
    /* 기본 활성 상태 스타일 */
    border-radius: 0.3rem !important;
    border: 1px solid #fff7e4 !important;

    abbr {
      color: #454545 !important;
      border: 11px solid #fff7e4;
      /* background: #fff7e4; */
    }
  }
  .react-calendar__tile--start-date.react-calendar__tile--active,
  .react-calendar__tile--end-date.react-calendar__tile--active {
    abbr {
      color: #454545 !important;
      border: 11px solid #fab92c !important;
      background: #fab92c !important;
    }
  }
  .react-calendar__tile--hasActive {
    border: none !important;
    abbr {
      color: #454545 !important;
      border: 15px solid #fab92c !important;
      background: #fab92c !important;
    }
  }
  /* 시작 날짜와 마지막 날짜 스타일 */
  .react-calendar__tile--start-date,
  .react-calendar__tile--end-date {
    background-color: #fab92c !important;
    color: blue !important;
    /* border: none !important; */
  }

  /* .react-calendar__tile--middle-date {
    background-color: #fff7e4 !important; 

    color: #454545 !important;
  } */

  ////////////////////////////////////////

  .disabled-future {
    background-color: #e6e6e6 !important;
    pointer-events: none !important;
    color: #c4c4c4 !important;
    border: 1px solid #e6e6e6 !important;
  }
  .react-calendar__tile.disabled-future {
    //비활성화
    background-color: #e6e6e6 !important;
    pointer-events: auto !important; /* 클릭 가능 */
    color: #c4c4c4;
    border: 11px solid #e6e6e6 !important;
    abbr {
      border: 11px solid #e6e6e6 !important;
      background-color: #e6e6e6 !important;
    }
  }
  /* hover, focus, active 상태에 대한 조정 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active,
  .react-calendar__tile--end-date.react-calendar__tile--active,
  .react-calendar__tile--start-date.react-calendar__tile--active {
    abbr {
      color: #454545 !important;
      border: 15px solid #fab92c !important;
      background: #fab92c;
      /* font-weight: lighter !important; */
    }
  }
  /* .react-calendar__tile--end-date.react-calendar__tile--active {
    abbr {
      color: #454545 !important;
      border: 11px solid #fab92c !important;
      background: #fab92c !important;
    }
  } */
  .react-calendar__tile--middle-date.react-calendar__tile--active {
    border-radius: 0.3rem !important;
    /* border: 1px solid #fab92c !important; */

    abbr {
      color: #454545 !important;
      border: 15px solid #fff7e4 !important;
      background: #fff7e4;
    }
  }
`;

export const DateRangeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  width: 100%;
  max-width: 332px;
`;

export const DateInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #454545;
  /* margin-right: 8px; */
  white-space: nowrap;
`;
export const DateTotalDays = styled.div`
  font-size: 16px;
  color: #454545;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

export const DateInputContainer = styled.div`
  padding: 0px 12px;
  width: 100%;
  max-width: 72px;
  height: 42px;
  border: 1px solid #c4c4c4;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  margin-left: 8px;
  span {
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  max-width: 332px;
  height: auto;
  max-height: 48px;
  padding: 12px 24px;
  background-color: #fab92c;
  font-family: Pretendard;
  font-size: 20px;
  color: #454545;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 12px;
  &:disabled {
    color: #c4c4c4;
    background-color: #e6e6e6;
    cursor: not-allowed;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const CustomNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigationButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;
export const MonthSelect = styled.select`
  padding-right: 75px !important;
  font-family: "Pretendard", sans-serif;
  margin: 0 5px;
  padding: 4px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  font-size: 0.85rem;
  outline: none;
  cursor: pointer;
`;
export const Select = styled.select`
  padding-right: 55px !important;
  font-family: "Pretendard", sans-serif;
  margin: 0 5px;
  padding: 4px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  outline: none;
`;
