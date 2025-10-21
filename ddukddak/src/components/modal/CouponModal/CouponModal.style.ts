import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  width: 100%;
  max-width: 528px;
  border-bottom: 1px solid #c4c4c4;
  margin-left: 24px;
`;
export const LogoContainer = styled.div``;
export const CloseBtn = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 55px;
  height: 24px;
  margin-right: 10px;
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  font-family: "Pretendard", sans-serif;
  align-items: center;
  z-index: 4;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 576px;
  height: 287px;
`;

export const CouponCodeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: 500;
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  color: #223345;
`;
export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CouponCodeInput = styled.input`
  font-family: "Pretendard", sans-serif;
  width: 100%;
  max-width: 504px;
  padding: 12px;
  outline: none;
  border-radius: 8px;
  border: 1px solid #c4c4c4;
  &::placeholder {
    font-size: 16px;
    font-weight: 300;
    color: #c4c4c4;
  }
`;

export const CouponCode = styled.div`
  margin-top: 24px;
  margin-left: 24px;
  margin-bottom: 12px;
`;

export const RegisterBtn = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 528px;
  padding: 18px 24px;
  border-radius: 8px;
  background: #fab92c;
  border: none;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  color: #223345;
  font-size: 20px;
  margin: 24px;
  cursor: pointer;
  &:disabled {
    background-color: #eee;
    cursor: default;
    color: #c4c4c4;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;

// 성공 메시지 스타일
export const SuccessMessage = styled.div`
  color: #52c41a; /* 초록색 텍스트 */
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;
