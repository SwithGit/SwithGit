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
`;
export const LabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 740px; /* Label의 고정 너비 설정 */
`;

export const InputWrapper = styled.div`
  position: relative;
  max-width: 744px;
  width: 100%;
  height: 42px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  font-family: "Pretendard", sans-serif;
  outline: none;
  width: 100%;
  padding: 10px;
  padding-right: 40px; /* 아이콘 영역을 고려한 패딩 추가 */
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
  &::placeholder {
    color: #c4c4c4;
  }
`;

export const InputSecond = styled(Input)`
  margin-top: -15px; /* 두 번째 입력 필드 위 간격 */
`;

export const ViewIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-60%);
  cursor: pointer;
`;

export const SubmitButton = styled.button<{ isActive: boolean }>`
  margin-top: 33px;
  max-width: 744px;
  height: 60px;
  font-family: "Pretendard", sans-serif;
  padding: 15px;
  background-color: ${(props) => (props.isActive ? "#fab92c" : "#EEEEEE")};
  color: ${(props) => (props.isActive ? "#223345" : "#C4C4C4")};
  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
  font-size: 20px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  margin-bottom: 180px;
`;
