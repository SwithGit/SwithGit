import styled from "styled-components";

export const CouponBackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 744px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 24px;
  background-color: white;
  box-sizing: border-box;
`;

export const CouponBackground = styled.img`
  width: 100%;
  max-width: 744px;
  height: auto;
  display: block;
  position: relative;
`;

export const CouponTitle = styled.div`
  position: absolute;
  top: 10%;
  left: 45px;
  color: #223345;
  font-size: calc(22px + 0.11vw);
  font-weight: bold;
  text-align: left;
  z-index: 2;
`;

export const DueBubble = styled.img`
  position: absolute;
  top: 24%;
  left: 210px;
  width: 40px;
  height: auto;
  z-index: 3;
`;
export const Due = styled.div`
  position: absolute;
  top: 25.5%;
  left: 218px;
  color: #223345;
  font-size: 12px;
  z-index: 4;
`;

export const Date = styled.div`
  position: absolute;
  top: 29.5%;
  left: 45px;
  border-radius: 8px;
  color: white;
  padding: 12px 24px;
  background-color: #223345;
  font-size: calc(14px + 0.12vw);
  z-index: 2;
`;

export const List = styled.div`
  position: absolute;
  top: 54%;
  left: 53px;
  padding-left: 0;
  margin-top: 0;
  z-index: 2;
  li {
    color: #c4c4c4;
    margin-bottom: 1px;
    font-size: calc(10px + 0.11vw);
  }
`;

export const RightText = styled.div`
  position: absolute;
  top: 45%;
  right: 45px;
  color: #223345;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  z-index: 2;
`;
