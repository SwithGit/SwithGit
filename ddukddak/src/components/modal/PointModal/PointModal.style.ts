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
  height: 491px;
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
  flex-direction: row;
  gap: 8px;
`;

export const CouponCodeInput = styled.input`
  font-family: "Pretendard", sans-serif;
  width: 100%;
  max-width: 474px;
  padding: 12px;
  padding-right: 40px;
  outline: none;
  border-radius: 8px;
  border: 1px solid #c4c4c4;
  &::placeholder {
    font-size: 16px;
    font-weight: 300;
    color: #c4c4c4;
  }

  /* 오른쪽에 "Point" 텍스트 추가 */
  background: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='20'><text x='0' y='15' font-size='17' fill='%23223345'>Point</text></svg>")
    no-repeat right center;
  background-position: calc(100% - 12px) center;
  background-size: 40px 20px;
`;

export const TotalPrice = styled.div`
  margin: 24px;
  padding-top: 24px;
  border-top: 1px solid #c4c4c4;
  display: flex;
  justify-content: space-between;
  div {
    font-size: 24px;
    font-weight: 500;
    color: #223345;
  }
`;
export const AlertText = styled.div`
  color: #223345;
  font-weight: 300;
  font-family: Pretendard;
  font-size: 14px;
  margin-left: 24px;
  margin-top: 8px;
`;
export const CardSelectBtn = styled.button`
  font-family: "Pretendard", sans-serif;
  max-width: 528px;
  color: ${({ disabled }) => (disabled ? "#c4c4c4" : "#223345")};
  font-size: 16px;
  height: 42px;
  outline: none;
  border-radius: 8px;
  border: none;
  background-color: ${({ disabled }) => (disabled ? "#eee" : "#FAB92C")};
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: background-color 0.3s, color 0.3s;
`;

export const CouponCode = styled.div`
  margin-top: 24px;
  margin-left: 24px;
  margin-bottom: 12px;
`;

export const RegisterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 528px;
  padding: 18px 24px;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? "#eee" : "#FAB92C")};
  border: none;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  color: ${({ disabled }) => (disabled ? "#c4c4c4" : "#223345")};
  font-size: 20px;
  margin: 24px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: background-color 0.3s, color 0.3s;
`;
