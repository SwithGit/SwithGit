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
  max-width: 792px;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 24px;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  color: #223345;
  flex-direction: column;
  margin-left: 24px;
  span {
    color: #f53030;
  }
  li {
    color: #f53030;
  }
`;

export const Alert = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
`;
export const PhoneAlert = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 600;
`;

export const List = styled.div``;

export const WithdrawContainerList = styled.div`
  width: 100%;
  max-width: 744px;
`;

export const WithdrawBtn = styled.button<{ disabled: boolean }>`
  margin-top: 48px;
  display: flex;
  width: 100%;
  height: 60px;
  padding: 18px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: ${({ disabled }) => (disabled ? "#eee" : "#fab92c")};
  border: none;
  color: ${({ disabled }) => (disabled ? "#c4c4c4" : "#223345")};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

export const PhoneConfirm = styled.input<{
  isVerified?: boolean;
  isMismatch?: boolean;
}>`
  color: #454545;
  font-family: Pretendard;
  font-size: 14.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 100%;
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid
    ${({ isVerified, isMismatch }) =>
      isMismatch ? "#F53030" : isVerified ? "#1BA056" : "#c4c4c4"};
  outline: none;
  &::placeholder {
    color: #c4c4c4;
  }
`;

export const ConfirmBtn = styled.button<{ disabled: boolean }>`
  font-family: Pretendard;
  border-radius: 8px;
  color: ${({ disabled }) => (disabled ? "#c4c4c4" : "#223345")};
  font-size: 16px;
  font-weight: 500;
  background: ${({ disabled }) => (disabled ? "#eee" : "#fab92c")};
  width: 120px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

export const ConfirmWrapper = styled.div`
  gap: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VerifiedText = styled.div`
  color: #1ba056;
  margin-top: 19px;
  margin-left: 11px;
  font-size: 15px;
`;

export const isVerified = styled.div`
  display: flex;
  align-items: center;
`;
export const PolicyCheck = styled.div`
  width: 100%;
  gap: 6px;
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    color: #223345;
  }

  b {
    margin-left: 5px;
    color: #3d97f5;
    text-decoration: underline;
    cursor: pointer;
  }

  input[type="checkbox"] {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid #454545;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
    position: relative;
    margin-right: 5px;
  }
  input[type="checkbox"]:checked {
    background-color: #fab92c;
    border-color: #fab92c;
    border: 1px solid #c4c4c4;
  }
  input[type="checkbox"]:checked::before {
    content: "✔";
    position: absolute;
    top: -1px;
    left: 2px;
    font-size: 12px;
    color: #454545;
  }

  span > b {
    display: inline;
    font-weight: 400;
    color: #cecece;
  }
`;
