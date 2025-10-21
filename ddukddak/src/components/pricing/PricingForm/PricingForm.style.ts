import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 100px;
`;
export const DropdownRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 576px;
  gap: 16px;
  margin-bottom: 24px;
`;

//일정 선택
export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ScheduleTitle = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #223345;
`;

export const ScheduleInput = styled.div`
  font-family: "Pretendard", sans-serif;
  padding: 12px 12px;
  color: #223345;
  font-size: 14px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  width: 100%;
  height: 19px;
  font-size: 16px;
  max-width: 552px;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
