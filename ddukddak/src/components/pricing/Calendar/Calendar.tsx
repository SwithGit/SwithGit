// CustomCalendar.tsx

import React, { useState, useEffect, useRef, useCallback } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import * as S from "./Calendar.style";
import moment from "moment";
import axios from "axios";

type ValuePiece = Date | null;

const CustomCalendar: React.FC<{
  onDateSelect: (startDate: string, endDate: string) => void;
  onClose: () => void;
}> = ({ onDateSelect, onClose }) => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [holidays, setHolidays] = useState<Date[]>([]);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(e.target.value, 10));
  };
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(parseInt(e.target.value, 10));
  };

  // 달력 외부 클릭 시 닫기
  const handleClickOutside = (event: MouseEvent) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    const fetchHolidays = async () => {
      const API_KEY = "AIzaSyDD2oh0hm5R3CL7cp0DuHSi4nEjpk5-4mc";
      const CALENDAR_ID =
        "ko.south_korea.official%23holiday%40group.v.calendar.google.com";
      const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

      try {
        const response = await axios.get(url);
        const events = response.data.items;
        const fetchedHolidays = events.map(
          (event: any) => new Date(event.start.date)
        );
        setHolidays(fetchedHolidays);
      } catch (error) {
        console.error("Error fetching holidays:", error);
      }
    };

    fetchHolidays();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 날짜 클릭 시 처리
  const handleClickDay = (value: Date) => {
    if (!dateRange[0] || (dateRange[0] && dateRange[1])) {
      // 새로운 선택 시작
      setDateRange([value, null]);
    } else if (dateRange[0] && !dateRange[1]) {
      // 두 번째 날짜 선택
      if (value < dateRange[0]) {
        // 두 번째 날짜가 첫 번째 날짜보다 이전이면 새로운 선택 시작
        setDateRange([value, null]);
      } else {
        setDateRange([dateRange[0], value]);
      }
    }
  };

  // 날짜 비활성화 로직
  const tileDisabled = useCallback(
    ({ date }: { date: Date }) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const twoWeeksFromNow = new Date(today);
      twoWeeksFromNow.setDate(today.getDate() + 13);

      const checkDate = new Date(date);
      checkDate.setHours(0, 0, 0, 0);

      if (!dateRange[0]) {
        // 첫 번째 날짜 선택 전: 14일 이후의 날짜 비활성화
        return checkDate > twoWeeksFromNow || checkDate < today;
      } else {
        // 첫 번째 날짜 선택 후: 과거 날짜만 비활성화
        return checkDate < today;
      }
    },
    [dateRange]
  );

  // 총 날짜 계산 함수
  const getTotalDays = () => {
    if (dateRange[0] && dateRange[1]) {
      const start = moment(dateRange[0]).startOf("day");
      const end = moment(dateRange[1]).startOf("day");
      return end.diff(start, "days") + 1;
    }
    return 0;
  };
  // 날짜 범위 선택 처리
  const handleDateChange = (value: Date | [Date, Date] | any) => {
    if (Array.isArray(value)) {
      // 날짜 범위가 선택된 경우 (두 개의 날짜)
      const [start, end] = value;
      setDateRange([start, end]); // 범위를 업데이트
    } else if (value instanceof Date) {
      // 단일 날짜가 선택된 경우
      setDateRange([value, null]); // 하나의 날짜만 선택된 경우, 시작 날짜로 설정
    }
  };
  // 타일 클래스명 설정 함수
  const tileClassName = useCallback(
    ({ date, view }: { date: Date; view: string }) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const checkDate = new Date(date);
      checkDate.setHours(0, 0, 0, 0);

      const classes = [];

      if (view === "month") {
        if (checkDate < today) {
          classes.push("past");
        }

        if (checkDate.getDay() === 0) {
          classes.push("react-calendar__tile--sunday");
        }

        if (checkDate.getDay() === 6) {
          classes.push("react-calendar__tile--saturday");
        }

        if (
          holidays.some(
            (holiday) => holiday.toDateString() === checkDate.toDateString()
          )
        ) {
          classes.push("react-calendar__tile--holiday");
        }

        if (dateRange[0]) {
          const startDate = new Date(dateRange[0]);
          startDate.setHours(0, 0, 0, 0);

          if (dateRange[1]) {
            const endDate = new Date(dateRange[1]);
            endDate.setHours(0, 0, 0, 0);

            if (checkDate.getTime() === startDate.getTime()) {
              classes.push("react-calendar__tile--start-date");
            } else if (checkDate.getTime() === endDate.getTime()) {
              classes.push("react-calendar__tile--end-date");
            } else if (checkDate > startDate && checkDate < endDate) {
              classes.push("react-calendar__tile--middle-date");
            }
          } else {
            if (checkDate.getTime() === startDate.getTime()) {
              classes.push("react-calendar__tile--start-date");
            }
          }
        }

        // 첫 번째 날짜 선택 전일 때만 'disabled-future' 클래스를 추가합니다.
        if (!dateRange[0]) {
          const twoWeeksFromNow = new Date(today);
          twoWeeksFromNow.setDate(today.getDate() + 13);
          if (checkDate > twoWeeksFromNow) {
            classes.push("disabled-future");
          }
        }
      }
      return classes.join(" ");
    },
    [dateRange, holidays]
  );

  return (
    <S.ModalOverlay>
      <S.ModalContent ref={calendarRef}>
        <S.CalendarHeader>
          <S.CalendarTitle>콘텐츠 일정</S.CalendarTitle>
          <S.CloseButton onClick={onClose}>✖</S.CloseButton>
        </S.CalendarHeader>
        <S.CalendarWrapper onClick={(e) => e.stopPropagation()}>
          <S.CustomNavigation>
            <S.NavigationButton
              onClick={() => setMonth((prev) => (prev - 1 + 12) % 12)}
            >
              ◀
            </S.NavigationButton>
            <S.Select onChange={handleYearChange} value={year}>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={today.getFullYear() - 5 + i}>
                  {today.getFullYear() - 5 + i}년
                </option>
              ))}
            </S.Select>
            <S.MonthSelect onChange={handleMonthChange} value={month}>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                  {i + 1}월
                </option>
              ))}
            </S.MonthSelect>
            <S.NavigationButton
              onClick={() => setMonth((prev) => (prev + 1) % 12)}
            >
              ▶
            </S.NavigationButton>
          </S.CustomNavigation>

          <Calendar
            showNavigation={false}
            selectRange={true}
            onClickDay={handleClickDay}
            calendarType="gregory"
            activeStartDate={new Date(year, month)}
            value={dateRange[1] ? [dateRange[0], dateRange[1]] : dateRange[0]}
            formatDay={(locale, date) => moment(date).format("D")}
            tileClassName={tileClassName}
            showNeighboringMonth={true}
            tileDisabled={tileDisabled}
            locale="ko-KR"
            showFixedNumberOfWeeks={true}
            onChange={handleDateChange} // 날짜 범위 선택
          />
        </S.CalendarWrapper>

        <S.DateRangeWrapper>
          <S.DateInput>
            <S.DateInputContainer>
              <span>{dateRange[0] ? dateRange[0].getDate() : "ㅤ"} 일</span>
            </S.DateInputContainer>
            <span>부터</span>
          </S.DateInput>
          <S.DateInput>
            <S.DateInputContainer>
              <span>{dateRange[1] ? dateRange[1].getDate() : "ㅤ"} 일</span>
            </S.DateInputContainer>
            <span>까지</span>
          </S.DateInput>
          <S.DateTotalDays>
            총{" "}
            <S.DateInputContainer>
              <span>{getTotalDays() > 0 ? getTotalDays() : "ㅤ"} 일</span>
            </S.DateInputContainer>
          </S.DateTotalDays>
        </S.DateRangeWrapper>
        <S.ButtonContainer>
          <S.ConfirmButton
            disabled={!dateRange[0] || !dateRange[1]}
            onClick={() => {
              if (dateRange[0] && dateRange[1]) {
                onDateSelect(
                  dateRange[0].toLocaleDateString("ko-KR"),
                  dateRange[1].toLocaleDateString("ko-KR")
                );
              }
              onClose();
            }}
          >
            일정 확정
          </S.ConfirmButton>
        </S.ButtonContainer>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default CustomCalendar;
