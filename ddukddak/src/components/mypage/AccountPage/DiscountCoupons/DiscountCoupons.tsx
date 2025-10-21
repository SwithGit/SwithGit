import React, { useState, useEffect } from "react";
import * as S from "./DiscountCoupons.style";
import Sidebar from "../Sidebar/Sidebar";
import Coupons from "./Coupons/Coupons";
import Button from "../../../common/Button/Button";
import CouponHistory from "./CouponHistory/CouponHistory";
import CouponModal from "../../../modal/CouponModal/CouponModal";

import { getUserCoupons } from "../../../../api/api";

const DiscountCoupons: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const refreshCoupons = () => {
    setLoading(true);
    getUserCoupons()
      .then((response) => {
        const couponsWithOrder = response.data.response.map(
          (coupon: any, index: number) => ({
            ...coupon,
            id: index + 1, // 순서 추가
          })
        );
        setCoupons(couponsWithOrder); // 순서가 추가된 쿠폰 데이터 설정
        setLoading(false);
      })
      .catch((err) => {
        console.error("쿠폰 데이터를 불러오는 중 오류 발생:", err);
        setError("쿠폰 데이터를 불러오는 중 오류가 발생했습니다.");
        setLoading(false);
      });
  };

  useEffect(() => {
    refreshCoupons();
  }, []);

  const columns = [
    { header: "순서", accessor: "id" as const }, // 순서 컬럼 추가
    { header: "쿠폰 명", accessor: "title" as const },
    { header: "쿠폰 등록일", accessor: "issued_at" as const },
    { header: "쿠폰 유효기간", accessor: "expiration_date" as const },
    { header: "사용 가능 여부", accessor: "status" as const },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <S.Title>할인쿠폰</S.Title>
        <S.Form>
          <S.Alert>현재 보유중인 쿠폰</S.Alert>
          <S.Coupon>
            {coupons.length > 0 ? (
              <Coupons />
            ) : (
              <S.NoCouponsMessage>보유중인 쿠폰이 없습니다.</S.NoCouponsMessage>
            )}
          </S.Coupon>
          <Button text="쿠폰 등록" onClick={openModal} />
        </S.Form>
        <S.Form>
          <S.Alert>쿠폰 등록내역</S.Alert>
          <div
            style={{
              borderBottom: "1px solid #c4c4c4",
              width: "100%",
              maxWidth: "744px",
            }}
          ></div>
          {coupons.length > 0 ? (
            <CouponHistory data={coupons} columns={columns} />
          ) : (
            <>
              <CouponHistory columns={columns} data={[]} />
              <S.NoCouponsMessage2>
                쿠폰 등록내역이 없습니다.
              </S.NoCouponsMessage2>
            </>
          )}
        </S.Form>
      </S.MainContent>
      {isModalOpen && (
        <CouponModal onClose={closeModal} refreshCoupons={refreshCoupons} />
      )}
    </S.Container>
  );
};

export default DiscountCoupons;
