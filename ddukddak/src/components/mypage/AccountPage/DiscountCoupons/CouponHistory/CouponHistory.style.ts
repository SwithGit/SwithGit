import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  max-width: 744px;
  border-collapse: collapse;
  margin: 24px 0;
  font-size: 16px;
  text-align: left;
`;

export const Th = styled.th`
  background-color: #fab92c;
  color: #223345;
  padding: 4px 8px;
  font-weight: 300;
  border: 1px solid white;
  text-align: center;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #c4c4c4;
`;

export const Td = styled.td<{ status?: string }>`
  padding: 10px;
  color: ${({ status }) =>
    status === "기간 만료"
      ? "#F53030"
      : status === "사용 완료"
      ? "#c4c4c4"
      : status === "사용 가능"
      ? "#0D50BB"
      : "#223345"};
  text-align: center;
`;
