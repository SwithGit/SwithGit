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
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  max-width: 792px;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 24px;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.label`
  position: relative;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 600;
  width: 720px; /* Label의 고정 너비 설정 */
`;

export const Input = styled.input`
  font-family: "Pretendard", sans-serif;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  width: 100%;
  max-width: 720px;
  outline: none;
  box-sizing: border-box;
  background-color: ${({ readOnly }) =>
    readOnly ? "#EEEEEE" : "#ffffff"}; /* 읽기 전용일 때 배경색 회색 */
  color: ${({ readOnly }) =>
    readOnly ? "#C4C4C4" : "#223345"}; /* 읽기 전용일 때 텍스트 색 회색 */
  cursor: ${({ readOnly }) =>
    readOnly ? "auto" : "auto"}; /* 읽기 전용일 때 커서 변경 */
`;
export const InputSecond = styled.input`
  font-family: "Pretendard", sans-serif;
  padding: 10px;
  margin-top: -20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  width: 100%;
  max-width: 720px;
  outline: none;
  box-sizing: border-box;
`;

export const InputWrapper = styled.div`
  max-width: 720px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* 주소 입력 필드와 버튼 사이의 간격 줄이기 */
`;

export const Button = styled.button<{
  checked: boolean;
  isActive?: boolean;
}>`
  margin-top: -20px;
  font-family: "Pretendard", sans-serif;
  margin-left: 5px;
  padding: 0px;
  width: 160px;
  height: 39px;
  font-size: 16px;
  color: ${({ checked }) => (checked ? "#223345" : "#C4C4C4")};
  background-color: ${({ checked }) => (checked ? "#fab92c" : "#EEEEEE")};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:disabled {
    cursor: default;
  }
`;

export const EmailWrapper = styled.div`
  width: 720px; /* Label의 고정 너비 설정 */
  display: flex;
  align-items: center;

  margin-bottom: 10px; /* 이메일 입력 필드 사이의 간격 줄이기 */
`;

export const EmailDomain = styled.span`
  margin-left: 10px;
`;

export const AddressWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px; /* 주소 입력 필드 사이의 간격 줄이기 */
  margin-bottom: 20px; /* 다른 필드와 동일하게 유지 */
`;

export const Note = styled.p`
  margin-bottom: 20px;
  margin-top: -17px;
  font-size: 14px;
  color: #223345;
  width: 720px; /* Label의 고정 너비 설정 */
`;
export const AtSymbol = styled.p`
  margin: 0 5px;
  font-weight: 600;
  font-size: 20px;
  color: #223345;
  margin-top: -20px;
`;
export const SubmitButton = styled.button<{ isActive: boolean }>`
  max-width: 720px;
  font-family: "Pretendard", sans-serif;
  padding: 15px;
  background-color: ${(props) => (props.isActive ? "#fab92c" : "#EEEEEE")};
  color: ${(props) => (props.isActive ? "#223345" : "#C4C4C4")};
  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
  font-size: 16px;
  margin-top: 30px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
`;
