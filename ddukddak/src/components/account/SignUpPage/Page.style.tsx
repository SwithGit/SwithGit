import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  width: 100%;
  margin-bottom: 150px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1152px;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  color: #223345;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;

  span {
    color: red;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginForm = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 672px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 90%; /* 모바일에서는 가로폭을 100%로 */
  }
`;

export const InputField = styled.input<{
  hasError?: boolean;
  isSuccess?: boolean;
  checked?: boolean;
}>`
  font-family: "Pretendard", sans-serif;
  width: 100%;
  max-width: 672px;
  height: 42px;
  padding: 13px;
  font-size: 16px;
  border: 1px solid
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
  &::placeholder {
    color: #c4c4c4;
    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const EmailInputField = styled.input<{
  hasError?: boolean;
  isSuccess?: boolean;
  checked?: boolean;
}>`
  font-family: "Pretendard", sans-serif;
  width: 100%;
  padding: 13px;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px solid
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
  &::placeholder {
    color: #c4c4c4;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
export const isOverlap = styled.div`
  display: flex;
`;

export const IdMessage = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  margin-bottom: 5px;
`;

export const PasswordMessage = styled.div<{ hasError?: boolean }>`
  font-size: 12px;
  color: ${(props) => (props.hasError ? "#FF2F01" : "#1BA056")};
  margin-top: 5px;
  text-align: center;
  margin-left: 12px;
`;

export const InputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckButton = styled.button<{
  checked: boolean;
  isActive?: boolean;
  isEnglish: boolean;
}>`
  font-family: "Pretendard", sans-serif;
  margin-left: 10px;
  padding: 12px;
  width: 120px;
  height: 42px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  align-items: center;
  font-size: ${({ isEnglish }) => (isEnglish ? "14px" : "16px")};
  color: ${({ checked }) => (checked ? "#223345" : "#c4c4c4")};
  background-color: ${({ checked }) => (checked ? "#fab92c" : "#eeeeee")};
  border: none;
  border-radius: 8px;
  cursor: ${({ checked }) => (checked ? "pointer" : "default")};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const AddressButton = styled.button<{
  isEnglish: boolean;
}>`
  font-family: "Pretendard", sans-serif;
  margin-left: 10px;
  padding: 12px;
  width: 120px;
  height: 42px;
  font-size: ${({ isEnglish }) => (isEnglish ? "13.4px" : "16px")};
  color: #223345;
  background-color: #fab92c;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const SecondInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto; /* 자동 크기 조정 */
  flex-grow: 1; /* 남은 공간을 차지하도록 설정 */
`;

export const InputConatiner = styled.div`
  display: flex;
  flex-direction: row; /* 가로로 정렬 */
  align-items: center; /* 세로 정렬 맞춤 */
  width: 100%;
  margin-bottom: 10px; /* 아래에 여백 추가 */
`;
export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    width: auto; /* 자동 크기 조정 */
  }
`;

export const AtSymbol = styled.span`
  padding: 0 10px;
  font-size: 20px;
`;

export const EmailDropdown = styled.select`
  width: 100%;
  padding: 13px;
  font-size: 12px;
  border: 1px solid #fab92c;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 10px;
  outline: none;
  font-family: "Pretendard", sans-serif;
`;

export const SignUpButton = styled.button<{ disabled: boolean }>`
  font-family: "Pretendard", sans-serif;
  width: 100%;
  max-width: 672px;
  height: auto;
  max-height: 60px;
  padding: 18px 24px;
  font-weight: 700;
  font-size: 20px;
  margin-top: 24px;
  color: ${(props) => (props.disabled ? "#c4c4c4" : "#223345")};
  background-color: ${(props) => (props.disabled ? "#eeeeee" : "#fab92c")};
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  margin-bottom: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#eeeeee" : "#fab92c")};
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Text = styled.div`
  margin-top: 10px;
  font-size: 10px;
  color: #c4c4c4;
`;

export const PolicyCheck = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  font-size: 12px;
  margin-left: -5px;

  div {
    color: #223345;
  }

  b {
    color: #3d97f5;
    text-decoration: underline;
    cursor: pointer;
  }

  a {
    color: #3d97f5;
    text-decoration: underline;
    &:hover {
      /* color: #fab92c; */
    }
    @media (max-width: 768px) {
      font-size: 9px;
    }
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

export const AccountLogo = styled.img`
  width: 320px;
  height: 240px;
  margin-top: -20px;
`;

export const PhoneMessage = styled.div`
  color: #c4c4c4;
  font-size: 16px;
  display: flex;
  margin-left: 12px;
  align-items: center;
`;
export const VerificationMessage = styled.div<{ hasError?: boolean }>`
  color: ${(props) => (props.hasError ? "#FF2F01" : "#1BA056")};
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-left: 12px;
`;
export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const PasswordToggleIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  width: 24px; // 아이콘의 너비를 설정
  height: 24px; // 아이콘의 높이를 설정
`;
