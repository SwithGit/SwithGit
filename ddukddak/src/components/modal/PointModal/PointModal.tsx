import React, { useState } from "react";
import * as S from "./PointModal.style";
import mainLogo from "../../../assets/vector/mainLogo.png";

interface PointModalProps {
  onClose: () => void;
}

const PointModal: React.FC<PointModalProps> = ({ onClose }) => {
  const [points, setPoints] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만
    setPoints(value);
  };

  const isButtonEnabled = points !== ""; // 포인트 값이 있을 때 버튼을 활성화

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.LogoWrapper>
          <S.Logo src={mainLogo} />
          <S.Title>포인트 충전</S.Title>
          <S.CloseBtn onClick={onClose}>✖</S.CloseBtn>
        </S.LogoWrapper>
        <S.CouponCodeWrapper>
          <S.CouponCode>충전 포인트 입력</S.CouponCode>
          <S.RegisterWrapper>
            <S.CouponCodeInput
              placeholder="충전하실 포인트를 입력해주세요."
              value={points}
              onChange={handleInputChange}
            />
          </S.RegisterWrapper>
          <S.AlertText>
            *포인트 충전은 100 Point 단위로 가능합니다. 예) 2600 Point
          </S.AlertText>
        </S.CouponCodeWrapper>
        <S.CouponCodeWrapper>
          <S.CouponCode>결제 방법</S.CouponCode>
          <S.RegisterWrapper>
            <S.CardSelectBtn disabled={!isButtonEnabled}>
              신용 · 체크카드
            </S.CardSelectBtn>
          </S.RegisterWrapper>
        </S.CouponCodeWrapper>
        <S.TotalPrice>
          <div>총 금액</div>
          <div>{points ? `${parseInt(points, 10)} KRW` : "0 KRW"}</div>
        </S.TotalPrice>
        <S.RegisterBtn disabled={!isButtonEnabled}>포인트 충전</S.RegisterBtn>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default PointModal;
