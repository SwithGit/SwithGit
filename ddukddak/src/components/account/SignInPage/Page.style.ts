import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  width: 100%;
  margin-top: -100px;
  @media (max-width: 768px) {
    margin-top: -150px; /* 모바일에서는 간격 줄이기 */
  }
`;

export const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0 20px; /* 모바일에서는 좌우 여백을 추가 */
  }
`;

export const LoginForm = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 426px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%; /* 모바일에서는 가로폭을 100%로 */
    padding: 10px; /* 패딩을 줄여서 공간 확보 */
  }
`;

export const LoginType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 14px; /* 모바일에서는 폰트 크기 증가 */
  }
`;

export const RadioButton = styled.div`
  display: flex;
  align-items: center;
  margin: 0 3px;

  input[type="radio"] {
    appearance: none;
    width: 14px;
    height: 14px;
    border: 1px solid #454545;
    border-radius: 50%;
    margin-right: 8px;
    position: relative;
    cursor: pointer;
    margin-bottom: 2px;
  }

  input[type="radio"]:checked::before {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    background-color: #454545;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  label {
    font-size: 12px;
    color: #454545;
  }

  &:not(:last-child)::after {
    content: "|";
    margin-left: 10px;
    color: #454545;
  }
`;

export const LoginInfo = styled.div`
  align-self: flex-start;
  margin-top: -30px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #454545;
`;

export const InputField = styled.input`
  font-family: "Pretendard", sans-serif;
  width: 100%;
  padding: 13px;
  margin-bottom: 10px;
  font-size: 12px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  box-sizing: border-box;
  outline: none;
  &::placeholder {
    color: #c4c4c4;
  }
`;

export const LoginButton = styled.button`
  font-family: "Pretendard", sans-serif;
  width: 100%;
  padding: 12px;
  font-size: 20px;
  color: black;
  background-color: #fab92c;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 14px;
  margin-top: 18px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 18px; /* 모바일에서는 버튼 폰트 크기 조절 */
    padding: 10px; /* 패딩 감소 */
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 14px;
  margin-top: 18px;
  margin-left: 30px;
  color: #c4c4c4;
  span {
    margin: 0 20px;
  }

  @media (max-width: 768px) {
    font-size: 12px; /* 모바일에서 텍스트 크기 줄이기 */
  }

  span {
    margin: 0 20px;
  }
`;

export const ActionLink = styled.a`
  text-decoration: none;
  color: #c4c4c4;
  cursor: pointer;
`;
export const AccountLogo = styled.img`
  width: 320px;
  height: 240px;
  margin-top: 250px;
`;
export const Divider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 24px 0px;
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
