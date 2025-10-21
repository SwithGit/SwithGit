import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import * as S from "./Points.style";
import ContentSelect from "./ContentSelect/ContentSelect";
import CustomCalendar from "./Calendar/Calendar";
import CouponHistory from "../DiscountCoupons/CouponHistory/CouponHistory";
import SearchButtonImg from "../../../../assets/img/Search.png";
import Button from "../../../common/Button/Button";
import PointModal from "../../../modal/PointModal/PointModal";
import { userPoints } from "../../../../api/api"; // API 함수 임포트
const ChangePassword: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [points, setPoints] = useState<number>(0); // 포인트 데이터를 저장할 상태
  const coupons = [
    {
      id: 1,
      title: "공간형 콘텐츠",
      issued_at: "2024.07.24 ~ 2024.08.02 (10일)",
      expiration_date: "메타버스 테스트",
      status: "10,000 Point",
    },
    {
      id: 2,
      title: "공간형 콘텐츠",
      issued_at: "2024.07.24 ~ 2024.08.02 (10일)",
      expiration_date: "메타버스 테스트",
      status: "10,000 Point",
    },
    {
      id: 3,
      title: "공간형 콘텐츠",
      issued_at: "2024.07.24 ~ 2024.08.02 (10일)",
      expiration_date: "메타버스 테스트",
      status: "10,000 Point",
    },
    {
      id: 4,
      title: "공간형 콘텐츠",
      issued_at: "2024.07.24 ~ 2024.08.02 (10일)",
      expiration_date: "메타버스 테스트",
      status: "10,000 Point",
    },
    {
      id: 5,
      title: "공간형 콘텐츠",
      issued_at: "2024.07.24 ~ 2024.08.02 (10일)",
      expiration_date: "메타버스 테스트",
      status: "10,000 Point",
    },
    {
      id: 6,
      title: "공간형 콘텐츠",
      issued_at: "2024.07.24 ~ 2024.08.02 (10일)",
      expiration_date: "메타버스 테스트",
      status: "10,000 Point",
    },
  ];

  const columns = [
    { header: "순서", accessor: "id" as const },
    { header: "콘텐츠 등록", accessor: "title" as const },
    { header: "일정", accessor: "issued_at" as const },
    { header: "콘텐츠 명", accessor: "expiration_date" as const },
    { header: "소모포인트", accessor: "status" as const },
  ];
  const fetchPoints = async () => {
    try {
      const data = await userPoints(); // API 호출
      console.log(data);
      setPoints(data.response.points); // 포인트 데이터를 상태에 저장
    } catch (error) {
      console.error("포인트 데이터를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchPoints(); // 컴포넌트 마운트 시 API 호출
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSearch = () => {
    if (startDate && endDate && startDate > endDate) {
      alert("시작 날짜가 종료 날짜보다 이후일 수 없습니다.");
      return; // 검색을 중단합니다.
    }
    // 날짜를 "YYYY.MM" 형식으로 변환하고 월 뒤에 점을 없앱니다
    const formattedStartDate = startDate
      ? new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit" })
          .format(startDate)
          .replace(/\s/g, "") // 공백 제거
          .replace(".0", ".") // 월 뒤에 점 제거
      : "날짜 없음";

    const formattedEndDate = endDate
      ? new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit" })
          .format(endDate)
          .replace(/\s/g, "") // 공백 제거
          .replace(".0", ".") // 월 뒤에 점 제거
      : "날짜 없음";

    console.log("콘텐츠 종류:", title);
    console.log("검색어:", searchTerm);
    console.log("시작:", formattedStartDate, "종료", formattedEndDate);
  };

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <S.Title>포인트</S.Title>
        <S.PointsContainerDetail>
          <S.Label>현재 보유중인 포인트</S.Label>
          <S.LabelSecond>{points} point</S.LabelSecond>
        </S.PointsContainerDetail>
        <S.ButtonWrapper>
          <Button text="포인트 충전" onClick={openModal} />
        </S.ButtonWrapper>
        <S.Form>
          <S.HistoryForm>
            <S.Title>포인트 사용내역</S.Title>
            <S.DatePickerWrapper>
              <ContentSelect onChange={(e) => setTitle(e.target.value)} />
              <CustomCalendar onDateSelect={(date) => setStartDate(date)} />
              <S.AtSymbol>~</S.AtSymbol>
              <CustomCalendar
                onDateSelect={(date) => setEndDate(date)}
                minDate={startDate || undefined} // Pass startDate as minDate for the end calendar
              />
              <S.SearchInputContainer>
                <S.SearchInput
                  placeholder="검색어 입력"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <S.SearchButton onClick={handleSearch}>
                  <img src={SearchButtonImg} alt="검색 버튼" />
                </S.SearchButton>
              </S.SearchInputContainer>
            </S.DatePickerWrapper>
            <CouponHistory data={coupons} columns={columns} />
          </S.HistoryForm>
        </S.Form>
      </S.MainContent>
      {isModalOpen && <PointModal onClose={closeModal} />}
    </S.Container>
  );
};

export default ChangePassword;
