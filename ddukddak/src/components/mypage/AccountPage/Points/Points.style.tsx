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

export const PointsContainerDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 792px;
`;

export const ButtonWrapper = styled.div`
  margin-left: 24px;
  margin-bottom: 48px;
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
  font-weight: 400;
  max-width: 792px;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 24px;
`;

export const TitleSecond = styled.div`
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

export const HistoryForm = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: -130px; */
  flex-direction: column;
  width: 90%;
`;

export const Label = styled.label`
  width: auto;
  /* margin-bottom: 5px; */
  font-size: 24px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  /* width: 29%; */
  margin-left: 24px;
`;

export const LabelSecond = styled.label`
  margin-right: 24px;
  /* width: 19%; */
  /* margin-bottom: 5px; */
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
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
  padding-right: 40px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
  &::placeholder {
    color: #c4c4c4;
  }
`;

export const InputSecond = styled(Input)`
  margin-top: -15px;
`;

export const ViewIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-60%);
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  margin-top: 15px;
  max-width: 744px;
  height: 60px;
  font-family: "Pretendard", sans-serif;
  font-weight: bold;
  padding: 15px;
  background-color: #fab92c;
  color: #223345;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  margin-bottom: 180px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  font-size: 14px;
  margin-right: 10px;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* 간격을 추가 */

  width: 100%;
`;

export const DatePicker = styled.input`
  padding: 20px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  font-size: 14px;
  margin-right: 10px;
`;

export const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const SearchInput = styled.input`
  outline: none;
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  font-size: 16px;

  font-family: "Pretendard", sans-serif;
  /* margin-right: 10px; */
  width: 185px;
  height: 20px;
  &::placeholder {
    color: #c4c4c4;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 5px;
  top: 10px;

  background: none;

  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 24px;
    height: 24px;
  }
`;
export const AtSymbol = styled.span`
  margin: -10px;
  font-size: 20px;
`;
