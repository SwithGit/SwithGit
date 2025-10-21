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
  color: #223345;
  font-family: Pretendard;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 576px;
  height: 454px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  padding-bottom: 24px;
`;

export const CouponCodeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-weight: 500;
  font-size: 20px;
  color: #223345;
`;

export const TotalPricingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-size: 20px;
  font-family: "Pretendard", sans-serif;
  color: #223345;
  width: 100%;
  max-width: 528px;
  border-top: 1px solid #c4c4c4;
  margin-left: 24px;
`;

export const Discount = styled.div`
  font-family: "Pretendard", sans-serif;
  margin: 24px 24px 12px 24px;
  display: flex;
`;
export const Point = styled.div`
  font-family: "Pretendard", sans-serif;
  margin: 24px 24px 12px 24px;
  color: #223345;
  font-weight: 300;
`;
export const DiscountPoint = styled.div`
  font-family: "Pretendard", sans-serif;
  margin: 24px 24px 12px 24px;
  color: #c4c4c4;
  font-weight: 300;
`;
export const TotalPricing = styled.div`
  margin: 26px 0 6px;
  font-size: 24px;
  font-weight: 500;
`;

export const RegisterBtn = styled.button<{ isDisabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 528px;
  padding: 18px 24px;
  border-radius: 8px;
  background: ${({ isDisabled }) => (isDisabled ? "#eee" : "#fab92c")};
  border: none;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  color: ${({ isDisabled }) => (isDisabled ? "#c4c4c4" : "#454545")};
  font-size: 20px;
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
  margin: 24px;
  &:hover {
    background-color: ${({ isDisabled }) => (isDisabled ? "#eee" : "#fff7e4")};
  }
  &:active {
    background-color: ${({ isDisabled }) => (isDisabled ? "#eee" : "#d1981b")};
  }
`;
