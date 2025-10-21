import React, { useState, useEffect, useRef } from "react";
import * as S from "./Calendar.style"; // 스타일 파일
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DateRangeIcon from "../../../../../assets/img/Date_range_light.png";

const CustomCalendar: React.FC<{
  onDateSelect: (date: Date) => void;
  minDate?: Date; // minDate 속성을 추가하여 이전 날짜를 제한할 수 있음
}> = ({ onDateSelect, minDate }) => {
  const [date, setDate] = useState<Date | null>(null); // 선택된 날짜 상태
  const [isOpen, setIsOpen] = useState(false); // 달력이 열려 있는지 여부 상태
  const [view, setView] = useState<"year" | "month">("year"); // 현재 달력 뷰 상태 (연도 또는 월)
  const calendarRef = useRef<HTMLDivElement>(null); // 달력 요소 참조

  // 현재 날짜 정보
  const today = new Date(); // 오늘 날짜
  const currentYear = today.getFullYear(); // 현재 연도
  const currentMonth = today.getMonth(); // 현재 월

  // 날짜 변경 시 호출되는 함수
  const handleChange = (newDate: Date) => {
    setDate(newDate); // 선택된 날짜 업데이트
    onDateSelect(newDate); // 부모 컴포넌트에 선택된 날짜 전달
    setIsOpen(false); // 날짜 선택 후 달력 닫기
  };

  // 입력 필드 클릭 시 달력 열기/닫기
  const handleInputClick = () => {
    setIsOpen(!isOpen); // 달력 열림/닫힘 토글
    setView("year"); // 달력이 열릴 때마다 연도 뷰로 리셋
  };

  // 달력 외부 클릭 시 달력 닫기 처리
  const handleClickOutside = (event: MouseEvent) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false); // 달력 외부를 클릭하면 달력 닫기
    }
  };

  // 달력이 열릴 때 외부 클릭 이벤트 추가, 닫힐 때 이벤트 제거
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // 컴포넌트가 언마운트될 때 이벤트 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // 날짜를 포맷하여 입력 필드에 표시할 텍스트 생성
  const formattedDate = date
    ? `${date.getFullYear()}.${date.getMonth() + 1}` // 선택된 날짜가 있을 경우 "YYYY.MM" 형식으로 표시
    : "기간 선택"; // 기본 텍스트

  return (
    <S.CustomCalendarContainer ref={calendarRef}>
      {/* 달력 입력 필드 */}
      <S.DatePickerInput onClick={handleInputClick} isPlaceholder={!date}>
        {formattedDate}
        <img src={DateRangeIcon} alt="달력 아이콘" />
      </S.DatePickerInput>
      {isOpen && (
        <S.CalendarWrapper>
          <Calendar
            onChange={(newDate) => handleChange(newDate as Date)} // 날짜 변경 시 호출되는 함수
            value={date} // 현재 선택된 날짜
            view={view} // 현재 달력 뷰 (연도 또는 월)
            minDetail="year" // 연도 뷰와 월 뷰로 제한
            minDate={minDate || undefined} // minDate 속성을 통해 이전 날짜 비활성화
            tileDisabled={
              ({ date }) =>
                date.getFullYear() > currentYear || // 현재 연도보다 이후 연도 비활성화
                (date.getFullYear() === currentYear &&
                  date.getMonth() > currentMonth) // 현재 연도 내에서 현재 월 이후 비활성화
            }
            onClickYear={(newDate) => {
              setDate(newDate as Date); // 연도를 선택하면 날짜 업데이트
              setView("month"); // 연도 선택 후 월 뷰로 변경
            }}
            onClickMonth={(newDate) => {
              setDate(newDate as Date); // 월을 선택하면 날짜 업데이트
              onDateSelect(newDate); // 부모 컴포넌트에 선택된 날짜 전달
              setIsOpen(false); // 달력 닫기
            }}
          />
        </S.CalendarWrapper>
      )}
    </S.CustomCalendarContainer>
  );
};

export default CustomCalendar;
