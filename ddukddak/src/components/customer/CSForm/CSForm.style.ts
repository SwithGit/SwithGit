import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  font-family: "Pretendard", sans-serif;
  @media (max-width: 768px) {
    padding: 0 20px;
    width: 100%;
  }
`;
export const AddAttachmentButton = styled.button`
  background-color: #f0f0f0;
  border: 2px dashed #ccc;
  color: #666;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &:focus {
    outline: none;
    border-color: #999;
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #999;
    cursor: not-allowed;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1152px;
  height: auto;

  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  padding: 24px;

  margin-bottom: 100px;

  @media (max-width: 768px) {
    padding: 16px;
    margin-bottom: 50px;
    width: 90%;
  }

  @media (max-width: 480px) {
    padding: 12px;
    margin-bottom: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 12px;
    padding: 0 20px;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500 !important;
  margin-bottom: 8px;
  color: #223345;
  flex-direction: column;
  @media (max-width: 768px) {
    font-size: 14px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    flex-direction: column;
  }

  span {
    color: #f53030;
  }
`;

export const TitleInput = styled.input`
  font-family: "Pretendard", sans-serif;
  width: 100%;
  height: 42px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;

  @media (max-width: 768px) {
    height: 36px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    height: 34px;
    font-size: 12px;
  }

  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 10px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

export const ContentTextarea = styled.textarea`
  font-family: "Pretendard", sans-serif;
  width: 100%;
  max-width: 1152px;
  height: 336px;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  box-sizing: border-box;
  resize: none;
  outline: none;

  @media (max-width: 768px) {
    height: 280px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    height: 240px;
    font-size: 12px;
  }

  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 10px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

export const AttachmentsWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  border-bottom: 1px solid #c4c4c4;
`;
export const PlusWrapper = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: flex-start;  */
  /* align-items: center; */
  position: relative;
`;
export const AttachmentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AttachmentInput = styled.input`
  font-family: "Pretendard", sans-serif;
  flex: 1;
  height: 42px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  font-weight: lighter;
  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
    font-weight: 300;
    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const AttachmentButton = styled.label`
  display: inline-block;
  position: absolute;
  right: 0;
  top: 55%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #454545;
  background-color: #ffffff;
  cursor: pointer;
  margin-right: 8px;
`;

export const AttachmentInputHidden = styled.input`
  display: none;
`;

export const EmailWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 42px;
  font-size: 16px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: "Pretendard", sans-serif;
  outline: none;
  padding-left: 10px;
  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  @media (max-width: 768px) {
    height: 36px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    height: 34px;
  }
`;

export const AtSymbol = styled.span`
  padding: 0 10px;
  font-size: 23px;
`;

export const DomainInput = styled.input`
  width: 556px;
  height: 42px;
  outline: none;
  padding-left: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: "Pretendard", sans-serif;
  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const Description = styled.span`
  color: #0d50bb;
  font-size: 13px;
  padding-left: 10px;
  margin-bottom: 6px;
`;

export const TitleWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainTitle = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 24px;
  color: #223345;
  font-weight: 500;
`;

export const MainLogo = styled.img`
  width: 50px;
  height: 25px;
  margin-right: 10px;
`;
export const Main = styled.div`
  display: flex;
`;
export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const HalfContainer = styled.div`
  width: 49%;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
export const PolicyCheck = styled.div`
  width: 100%;
  gap: 6px;
  margin-top: 8px;
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
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  height: auto;
  max-height: 60px;
  width: 100%;
  max-width: 1152px;
  padding: 24px 18px;
  font-weight: bold;
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
    background-color: ${(props) => (props.disabled ? "#eeeeee" : "#FFF7E4")};
  }
  &:active {
    background-color: ${(props) => (props.disabled ? "#eeeeee" : "#d1981b")};
  }
  @media (max-width: 768px) {
    padding: 18px 14px;
    font-size: 18px;
  }
`;

export const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 500 !important;
  margin-bottom: 8px;
  color: #223345;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
