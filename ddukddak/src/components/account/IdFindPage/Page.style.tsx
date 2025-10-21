import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  width: 100%;
  margin-bottom: 150px;
`;

export const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const IdFindForm = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 372px;
  padding: 20px;
`;
export const IdFindInfoSecond = styled.div`
  font-size: 16px;
  margin-top: 24px;
  text-align: left;
  width: 100%;
  color: #223345;
`;
export const IdFindInfo = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
  color: #223345;
`;

export const IdFindInfoBold = styled(IdFindInfo)`
  color: #c4c4c4;
  margin-top: -7px;
  font-size: 14px;
  margin-left: 10px;
  font-weight: 300;
`;

export const InputField = styled.input<{
  hasError?: boolean;
  isSuccess?: boolean;
  checked?: boolean;
  isEnglish: boolean;
}>`
  font-family: "Pretendard", sans-serif;
  width: 100%;
  height: 43px;
  padding: 13px;
  font-size: 16px;

  border: 1px solid #c4c4c4;

  ${(props) =>
    props.hasError
      ? "#FF2F01"
      : props.isSuccess
      ? "#1BA056"
      : props.checked
      ? "#c4c4c4"
      : "#c4c4c4"};
  border-radius: 8px;
  box-sizing: border-box;
  outline: none;
  margin-bottom: 10px;
  &::placeholder {
    color: #c4c4c4;
    font-size: ${({ isEnglish }) => (isEnglish ? "13.7px" : "16px")};
  }
  background-color: ${(props) => (props.checked ? "#fff" : "#fff")};
  color: ${(props) => (props.checked ? "#000" : "#000")};
`;

export const InputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: -10px;
`;

export const CheckButton = styled.button<{
  checked: boolean;
  isActive?: boolean;
  isEnglish: boolean;
}>`
  font-family: "Pretendard", sans-serif;
  margin-left: 10px;
  width: 170px;
  height: 43px;
  margin-top: -10px;
  font-size: ${({ isEnglish }) => (isEnglish ? "13px" : "16px")};
  font-weight: 500;
  color: ${({ checked }) => (checked ? "#223345" : "#223345")};
  background-color: ${({ checked }) => (checked ? "#fab92c" : "#fab92c")};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const IdFindButton = styled.button<{ disabled?: boolean }>`
  font-family: "Pretendard", sans-serif;
  width: 100%;
  height: 48px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 24px;
  color: ${(props) => (props.disabled ? "#c4c4c4" : "#223345")};
  background-color: ${(props) => (props.disabled ? "#eeeeee" : "#fab92c")};
  border: none;
  border-radius: 8px;
  margin-bottom: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
  &:hover {
    background-color: ${(props) => (props.disabled ? "#eeeeee" : "#fab92c")};
  }
`;

export const VerificationMessage = styled.div<{ hasError?: boolean }>`
  color: ${(props) => (props.hasError ? "#FF2F01" : "#1BA056")};
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
`;

export const AccountLogo = styled.img`
  width: 320px;
  height: 240px;
  margin-top: 150px;
`;
export const SuccessMessage = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-top: 60px;
  text-align: center;
  margin-bottom: 120px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 372px;
  margin-top: 30px;
`;

export const ActionButton = styled.button`
  font-family: "Pretendard", sans-serif;
  width: 100%;

  padding: 12px;
  font-weight: bold;
  font-size: 16px;
  color: #223345;
  background-color: #fab92c;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 15px;
  transition: background-color 0.3s ease, color 0.3s ease;
`;
export const Divider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0px;
  margin-bottom: 24px;
  white-space: nowrap;
  font-size: 12px;
  color: #c4c4c4;
  hr {
    width: 100%;
    height: 0.5px;
    border: none;
    background-color: #c4c4c4;
  }

  span {
    min-width: fit-content;
  }
`;
