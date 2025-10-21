import React, { useState, useEffect } from "react";
import * as S from "./Coupons.style";
import CouponBackground from "../../../../../assets/img/coupons_background.png";
import orangeDue from "../../../../../assets/img/orange_due.png";
import Pagination from "../../../../common/Pagination/Pagination";
import { getUserCoupons } from "../../../../../api/api"; // 쿠폰 API 가져오기

interface Coupon {
  id: number;
  title: string;
  expiration_date: string; // 쿠폰 만료일
  status: string; // 쿠폰 상태 ('사용 가능', '기간 만료', '사용 완료')
}

const Coupons: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const couponsPerPage = 3;

  useEffect(() => {
    // 쿠폰 데이터를 API에서 가져옴
    getUserCoupons()
      .then((response) => {
        console.log(response.data.response); // API 응답 구조 확인
        // '사용 가능' 상태인 쿠폰만 필터링하여 설정
        const availableCoupons = response.data.response.filter(
          (coupon: Coupon) => coupon.status === "사용 가능"
        );
        setCoupons(availableCoupons);
        setLoading(false);
      })
      .catch((err) => {
        console.error("쿠폰 데이터를 불러오는 중 오류 발생:", err);
        setError("쿠폰 데이터를 불러오는 중 오류가 발생했습니다.");
        setLoading(false);
      });
  }, []);

  // D-day 계산 함수
  const calculateDue = (expiration_date: string) => {
    const today = new Date();
    const expireDate = new Date(expiration_date);
    const diffTime = expireDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 일 단위로 차이 계산

    if (diffDays > 0) {
      return `D-${diffDays}`;
    } else if (diffDays === 0) {
      return `D-day`;
    } else {
      return `만료됨`;
    }
  };

  // 현재 페이지에 표시할 쿠폰 목록 계산
  const indexOfLastCoupon = currentPage * couponsPerPage;
  const indexOfFirstCoupon = indexOfLastCoupon - couponsPerPage;
  const currentCoupons = coupons.slice(indexOfFirstCoupon, indexOfLastCoupon);

  const totalPages = Math.ceil(coupons.length / couponsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // 쿠폰이 없을 때 메시지 표시
  if (!coupons.length) {
    return <div>보유중인 쿠폰이 없습니다.</div>;
  }

  return (
    <div>
      {currentCoupons.map((coupon) => (
        <S.CouponBackgroundWrapper key={coupon.id}>
          <S.CouponBackground src={CouponBackground} />
          <S.CouponTitle>{coupon.title}</S.CouponTitle>
          <S.DueBubble src={orangeDue} />
          <S.Due>{calculateDue(coupon.expiration_date)}</S.Due>
          <S.Date>사용기간 : {coupon.expiration_date} 까지</S.Date>
          <S.List>
            <li>쿠폰 유효기간은 쿠폰 등록일로부터 30일 입니다.</li>
            <li>최대 1000 Point 까지 할인 됩니다.</li>
            <li>최소 1000 Point 이상 사용 시 사용이 가능합니다.</li>
            <li>AR 콘텐츠에는 사용이 불가능합니다.</li>
            <li>이 쿠폰은 다른 쿠폰과 중복으로 사용할 수 없습니다.</li>
            <li>이 쿠폰은 예고 없이 종료 또는 변경될 수 있습니다.</li>
          </S.List>
          <S.RightText>쿠폰 사용하기 {">"}</S.RightText>
        </S.CouponBackgroundWrapper>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Coupons;
