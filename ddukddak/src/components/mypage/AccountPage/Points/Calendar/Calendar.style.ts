import styled from "styled-components";

// Calendar 컨테이너를 스타일링하는 컴포넌트
export const CustomCalendarContainer = styled.div`
  font-family: "Pretendard", sans-serif !important; // 폰트 설정
  width: 100%; // 컨테이너의 너비를 100%로 설정
  max-width: 240px;
  height: 100%; // 컨테이너의 높이를 100%로 설정
  display: flex; // 내부 요소들을 flexbox로 배치
  justify-content: center; // 내부 요소를 가로 방향으로 중앙에 배치
  position: relative; // 위치를 상대적으로 설정해 내부 요소의 절대 위치를 지정 가능하게 함

  .react-calendar {
    border: none; // 기본 border 제거
    border-radius: 0.5rem; // 전체 캘린더의 테두리를 둥글게
    width: 240px !important; /* 전체 캘린더의 너비 조정 */
    height: 244px; /* 전체 캘린더의 높이 자동 조정 */
  }
  .react-calendar__viewContainer {
    border-top: 1px solid #c4c4c4; /* 상단에 선 추가 */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .react-calendar__month-view {
    abbr {
      color: #454545; // 월별 보기에서 사용되는 텍스트의 색상
      font-family: "Pretendard", sans-serif !important; // 폰트 설정
    }
  }
  .react-calendar__navigation__arrow {
    margin-top: 15px;

    transform-origin: center; /* 변형 기준을 가운데로 설정 */
  }
  .react-calendar__navigation {
    justify-content: center !important; // 캘린더의 내비게이션을 중앙에 배치
    height: 28px;
    justify-content: space-between;
    align-items: center;
    color: #454545;
  }

  .react-calendar__navigation button {
    font-size: 16px !important; // 내비게이션 버튼의 폰트 크기 설정
    font-family: "Pretendard", sans-serif !important; // 폰트 설정
    font-weight: 500;
    color: #454545;
  }
  .react-calendar__navigation button:hover {
    background: none !important; /* 호버 시 배경색 제거 */
    color: inherit; /* 호버 시 텍스트 색상 변경 안함 */
  }
  .react-calendar__navigation
    button.react-calendar__navigation__arrow.react-calendar__navigation__prev2-button,
  .react-calendar__navigation
    button.react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
    display: none; /* 두 개의 화살표 버튼 숨기기 */
  }
  .react-calendar__navigation button:focus {
    background-color: white !important; // 내비게이션 버튼이 포커스를 받을 때 배경색을 흰색으로 설정
  }

  .react-calendar__navigation button:disabled {
    background-color: white !important; // 비활성화된 내비게이션 버튼의 배경색을 흰색으로 설정
  }

  .react-calendar__navigation__label {
    flex-grow: 0;
    margin-top: 15px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none; // 요일 헤더의 밑줄 제거
  }

  .react-calendar__tile--now {
    background: none !important; // 현재 날짜의 타일 배경색을 제거
    abbr {
      color: ${(props) =>
        props.theme.primary_2} !important; // 현재 날짜의 텍스트 색상 설정
    }
  }

  .react-calendar__tile {
    font-size: 16px;
    font-family: "Pretendard", sans-serif !important; // 폰트 설정
    width: 60px !important; // 타일의 너비 설정
    height: 24px !important; // 타일의 높이 설정
    padding: 0 !important; // 타일의 내부 패딩 제거
    border: none !important; /* 테두리 제거 */

    display: flex !important; // 타일 내부 요소를 flexbox로 배치
    align-items: center !important; // 타일 내부 요소를 수직 방향으로 중앙에 배치
    justify-content: center !important; // 타일 내부 요소를 가로 방향으로 중앙에 배치
    position: relative !important; // 타일의 위치를 상대적으로 설정

    &:hover {
      font-size: 16px;
      border: none !important; /* 테두리 제거 */
      background-color: white !important; // 타일이 호버될 때 배경색을 설정
      color: #c4c4c4 !important; // 타일이 호버될 때 텍스트 색상을 흰색으로 설정
    }
  }

  .react-calendar__month-view__days {
    display: grid !important; // 월별 일 타일을 그리드 레이아웃으로 배치
    grid-template-columns: repeat(7, 1fr) !important; // 7열로 구성
    grid-template-rows: repeat(6, 1fr) !important; // 6행으로 구성
    gap: 1px !important; // 타일 사이의 간격 설정
  }

  .react-calendar__year-view__months__month {
    font-family: "Pretendard", sans-serif !important; // 폰트 설정
    flex: 0 0 calc(33.3333% - 15px) !important; // 연간 보기에서 월 타일의 너비와 여백 설정
    margin-inline-start: 5px !important; // 각 타일의 좌측 여백 설정
    margin-inline-end: 10px !important; // 각 타일의 우측 여백 설정
    margin-block-end: 10px !important; // 각 타일의 하단 여백 설정
    margin-top: 15px;
    border-radius: 0.5rem !important; // 활성화된 타일의 테두리를 둥글게
    border: none !important; /* 테두리 제거 */
    width: 60px !important; /* 월 타일의 너비 설정 */
    height: 24px !important;
    font-weight: 500;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    font-family: "Pretendard", sans-serif !important; // 폰트 설정
    background-color: #fab92c !important; // 활성화된 타일 및 포커스된 타일의 배경색 설정
    border: none !important; /* 활성화된 타일의 테두리 제거 */
    border-radius: 0.5rem !important; // 활성화된 타일의 테두리를 둥글게
    abbr {
      width: 60px !important; /* 월 타일의 너비 설정 */
      height: 24px !important;
      font-weight: 500;
      border-radius: 0.5rem !important; // 활성화된 타일의 테두리를 둥글게
      font-family: "Pretendard", sans-serif !important; // 폰트 설정
      color: #223345 !important; // 활성화된 타일의 텍스트 색상 설정
      background-color: #fab92c !important; // 활성화된 타일 내부 텍스트의 배경색 설정
      display: flex !important; /* 플렉스 박스를 사용하여 중앙 정렬 */
      justify-content: center !important; /* 가로 정렬을 중앙으로 */
      align-items: center !important; /* 세로 정렬을 중앙으로 */
      line-height: 24px !important; /* 텍스트의 높이를 요소의 높이와 맞춤 */
      padding: 0 !important; /* 추가적인 여백을 제거 */
    }
  }
  .react-calendar__tile--hasActive {
    abbr {
      width: 60px !important; /* 월 타일의 너비 설정 */
      height: 24px !important;
      font-weight: 500;
      border-radius: 0.5rem !important; // 활성화된 타일의 테두리를 둥글게
      font-family: "Pretendard", sans-serif !important; // 폰트 설정
      color: #223345 !important; // 활성화된 타일의 텍스트 색상 설정
      background-color: #fab92c !important; // 활성화된 타일 내부 텍스트의 배경색 설정
      display: flex !important; /* 플렉스 박스를 사용하여 중앙 정렬 */
      justify-content: center !important; /* 가로 정렬을 중앙으로 */
      align-items: center !important; /* 세로 정렬을 중앙으로 */
      line-height: 24px !important; /* 텍스트의 높이를 요소의 높이와 맞춤 */
      padding: 0 !important; /* 추가적인 여백을 제거 */
    }
  }

  .react-calendar__tile.selected {
    background-color: #fab92c !important; // 선택된 타일의 배경색 설정
    border-radius: 0.5rem !important; // 활성화된 타일의 테두리를 둥글게

    abbr {
      color: white !important; // 선택된 타일의 텍스트 색상 설정
    }
  }

  .react-calendar__tile--holiday,
  .react-calendar__tile.disabled,
  .react-calendar__tile.past {
    background-color: #c4c4c4 !important; // 휴일, 비활성화, 과거 날짜 타일의 배경색 설정
    pointer-events: none !important; // 휴일, 비활성화, 과거 날짜 타일의 클릭 비활성화
    color: #c4c4c4; // 텍스트 색상 설정
    border: none !important; // 테두리 제거

    abbr {
      background-color: #c4c4c4 !important; // 텍스트 배경색 설정
      border: 13px solid #e6e6e6 !important; // 텍스트 주변의 테두리 설정
    }
  }

  .react-calendar__tile.disabled.react-calendar__tile--sunday,
  .react-calendar__tile.past.react-calendar__tile--sunday {
    background-color: #e6e6e6; // 일요일 타일의 배경색 설정
    abbr {
      background-color: #e6e6e6 !important; // 일요일 타일 텍스트의 배경색 설정
      color: #f53030 !important; // 일요일 타일 텍스트의 색상 설정
    }
  }

  .react-calendar__tile.disabled.react-calendar__tile--saturday,
  .react-calendar__tile.past.react-calendar__tile--saturday {
    abbr {
      color: #4a7cfe !important; // 토요일 타일 텍스트의 색상 설정
    }
  }

  .react-calendar__tile:not(.react-calendar__tile--holiday) {
    background-color: #e6e6e6 !important; // 휴일이 아닌 타일의 배경색을 흰색으로 설정
    border: 1px solid #454545; // 휴일이 아닌 타일의 테두리 설정
  }

  .react-calendar__tile:not(.react-calendar__tile.disabled) {
    background-color: white !important; // 비활성화되지 않은 타일의 배경색을 흰색으로 설정
    border: 1px solid #454545; // 비활성화되지 않은 타일의 테두리 설정
  }

  .react-calendar__tile {
    border-radius: 0.3rem !important; // 타일의 테두리를 둥글게 설정
  }

  .react-calendar__tile--neighboringMonth {
    background-color: white !important; // 인접한 달의 타일 배경색을 흰색으로 설정
    color: #c4c4c4 !important; // 인접한 달의 타일 텍스트 색상 설정
  }

  .react-calendar__tile--sunday {
    background-color: #e6e6e6; // 일요일 타일의 배경색 설정
    pointer-events: none !important; // 일요일 타일의 클릭 비활성화
    border: 3px solid #e6e6e6 !important; // 일요일 타일의 테두리 설정

    abbr {
      background-color: #e6e6e6; // 일요일 타일 텍스트의 배경색 설정
      border: 10px solid #e6e6e6 !important; // 일요일 타일 텍스트 주변의 테두리 설정
      color: #f53030 !important; // 일요일 타일 텍스트 색상 설정
    }
  }

  .react-calendar__tile--saturday {
    abbr {
      color: #4a7cfe !important; // 토요일 타일 텍스트 색상 설정
    }
  }

  /* 요일 헤더 간격 조정 */
  .react-calendar__month-view__weekdays {
    display: flex !important; // 요일 헤더를 flexbox로 배치
    justify-content: center !important; // 요일 헤더를 가로 방향으로 중앙에 배치
    grid-template-columns: repeat(7, 1fr) !important; // 7개의 열로 구성
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center !important; // 요일 헤더 텍스트를 중앙 정렬
  }

  .react-calendar__tile--holiday {
    pointer-events: none !important; // 휴일 타일의 클릭 비활성화
    abbr {
      color: red !important; // 휴일 타일 텍스트 색상 설정
      background-color: #e6e6e6 !important; // 휴일 타일 텍스트 배경색 설정
      border: 12px solid #e6e6e6 !important; // 휴일 타일 텍스트 주변의 테두리 설정
    }
  }

  .react-calendar__tile:disabled {
    font-family: "Pretendard", sans-serif !important; // 폰트 설정
    background-color: #c4c4c4;
    color: #c4c4c4;
    font-size: 16px;
    font-weight: 500 !important; // 타일 텍스트의 폰트 두께 설정
  }
`;

// 날짜 선택 인풋 필드 스타일링
export const DatePickerInput = styled.div<{ isPlaceholder: boolean }>`
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  font-family: "Pretendard", sans-serif !important; // 폰트 설정
  cursor: pointer;
  background-color: #ffffff;
  font-size: 16px;
  width: 125px;
  height: 20px;
  text-align: center;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  color: ${({ isPlaceholder }) =>
    isPlaceholder
      ? "#c4c4c4"
      : "#000000"}; // isPlaceholder가 true이면 회색, false이면 검정색
  img {
    width: 24px; /* 이미지 크기 */
    height: 24px; /* 이미지 크기 */
    margin-left: 35px; /* 텍스트와 이미지 사이의 간격 */
  }
`;

// 달력을 포함하는 래퍼 스타일링
export const CalendarWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 10;
  z-index: 1000;
  background-color: white;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  width: 240px;
`;
