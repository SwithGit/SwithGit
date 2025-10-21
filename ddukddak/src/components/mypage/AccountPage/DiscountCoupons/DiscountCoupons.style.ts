import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: "Pretendard", sans-serif;
  background-color: white;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 50px 20px;
  box-sizing: border-box;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: white;
  margin-left: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  /* width: 100%; */
  max-width: 792px;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 24px;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  color: #223345;
  flex-direction: column;
  /* margin-left: 24px; */
  padding-left: 24px;
  padding-right: 24px;
`;

export const Alert = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
  /* margin-left: 24px; */
`;

export const NoCouponsMessage = styled.div`
  color: #c4c4c4; /* 회색 텍스트 */
  font-size: 24px;
  text-align: center !important;
  justify-content: center !important;
  margin: 110px 0; /* 상하 여백 */
  padding: 20px;
`;
export const NoCouponsMessage2 = styled.div`
  color: #c4c4c4; /* 회색 텍스트 */
  font-size: 24px;
  text-align: center !important;
  justify-content: center !important;
  margin: 20px 0; /* 상하 여백 */
  padding: 20px;
`;
export const Coupon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* 부모 요소의 너비를 가득 채움 */
`;
