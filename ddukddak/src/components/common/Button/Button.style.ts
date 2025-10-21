import styled from "styled-components";

export const Btn = styled.button<{ disabled: boolean }>`
  margin-top: 38px;
  width: 100%;
  max-width: 744px;
  height: auto;
  padding: 18px 24px;
  justify-content: center;
  border-radius: 8px;
  background: ${({ disabled }) => (disabled ? "#eee" : "#fab92c")};
  border: none;
  color: ${({ disabled }) => (disabled ? "#c4c4c4" : "#223345")};
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;
