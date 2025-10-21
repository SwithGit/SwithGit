import React, { useState } from "react";
import * as S from "./CouponModal.style";
import mainLogo from "../../../assets/vector/mainLogo.png";
import { registerCoupon } from "../../../api/api";

interface CouponModalProps {
  onClose: () => void;
  refreshCoupons: () => void; // 부모에서 전달받은 쿠폰 갱신 함수
}

const CouponModal: React.FC<CouponModalProps> = ({
  onClose,
  refreshCoupons,
}) => {
  const [couponCode, setCouponCode] = useState("");
  const [loading, setLoading] = useState(false);

  const isActive = couponCode.trim() !== "" && !loading;

  const handleCouponRegistration = async () => {
    if (!couponCode) {
      alert("쿠폰 코드를 입력해주세요.");
      return;
    }

    setLoading(true);

    try {
      const result = await registerCoupon(couponCode);

      if (result.success) {
        alert("쿠폰이 성공적으로 등록되었습니다.");
        setCouponCode(""); // 입력 필드 초기화
        refreshCoupons(); // 부모 컴포넌트에서 쿠폰 목록 갱신
        onClose(); // 모달 닫기
      } else {
        if (result.data.statusCode === 404) {
          alert("이미 사용한 쿠폰 코드입니다.");
        } else if (result.data.statusCode === 400) {
          alert("존재하지 않는 쿠폰 코드입니다.");
        } else {
          alert("쿠폰 등록에 실패했습니다.");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.LogoWrapper>
          <S.Logo src={mainLogo} />
          <S.Title>쿠폰 등록</S.Title>
          <S.CloseBtn onClick={onClose}>✖</S.CloseBtn>
        </S.LogoWrapper>

        <S.CouponCodeWrapper>
          <S.CouponCode>쿠폰 코드 입력</S.CouponCode>
          <S.RegisterWrapper>
            <S.CouponCodeInput
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="(-)를 제외한 숫자만 입력해주세요."
            />
            <S.RegisterBtn
              onClick={handleCouponRegistration}
              isActive={isActive}
              disabled={!isActive}
            >
              {loading ? "등록 중..." : "쿠폰 등록"}
            </S.RegisterBtn>
          </S.RegisterWrapper>
        </S.CouponCodeWrapper>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default CouponModal;
