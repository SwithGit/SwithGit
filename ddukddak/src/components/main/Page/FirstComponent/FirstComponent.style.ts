import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  flex-direction: column;
  height: 100vh;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Pretendard", sans-serif;
  flex-direction: column;
  margin-right: 200px;
  height: 100vh;
  margin-top: -100px;
`;

export const MobileTextContainer = styled.div<{ isEnglish: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  flex-direction: column;
  margin: 0 20px;
  height: auto;
  margin-top: 60px;
  padding: ${({ isEnglish }) => (isEnglish ? "40px 0" : "60px 0")};
`;
export const Title = styled.div`
  font-weight: 100;
  font-size: 20px;
  color: #223345;
`;

export const MobileTitle = styled.div<{ isEnglish: boolean }>`
  font-weight: 100;
  font-size: ${({ isEnglish }) => (isEnglish ? "12px" : "14px")};
  color: #223345;
  margin-bottom: 10px; /* 제목과 텍스트 사이 여백 */
`;
export const Text = styled.div`
  font-weight: 700;
  font-size: calc(45px + 0.3vw);
  color: #223345;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const MobileText = styled.div<{ isEnglish: boolean }>`
  font-weight: 700;
  font-size: ${({ isEnglish }) => (isEnglish ? "30px" : "32px")};
  color: #223345;
  margin-bottom: 20px; /* 텍스트와 다음 요소 사이 여백 */
`;

export const Logo = styled.img`
  width: calc(20px + 13vw);
`;

export const MobileLogo = styled.img`
  width: 150px; /* 로고 크기 조절 */
  margin-bottom: 20px; /* 로고와 버튼 사이 여백 */
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const MobileContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const LeftAligned = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;

export const CenterAligned = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  flex: 3;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 175px;
  height: 45px;
  background-color: #fab92c;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 800;
  color: #223345;
  cursor: pointer;
`;

export const MobileButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 192px;
  height: 36px;
  padding: 12px 24px;
  background-color: #fab92c;
  border-radius: 30px;
  font-size: 24px;
  font-weight: 800;
  color: #223345;
  cursor: pointer;
`;
export const expandImg = styled.img`
  width: 48px;
  height: 48px;
  margin: 24px 191px;
`;
