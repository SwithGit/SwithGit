import styled, { keyframes, css } from "styled-components";

// Drop-in animation for messages
const dropAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Fade-in animation for SecondMobileImg2
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const heartEyesAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
export const HeartEyes = styled.img`
  position: relative;
  width: 128px;
  height: 128px;
  top: -650px;
  right: 90px;
  opacity: 0;
  transform: scale(0.8);
  animation: ${heartEyesAnimation} 1s ease forwards;
  animation-delay: 0.5s;
`;
export const Heart = styled.img`
  position: relative;
  width: 86px;
  height: 66px;
  top: -850px;
  right: 90px;
  opacity: 0;
  transform: scale(0.8);
  animation: ${dropAnimation} 1.5s ease forwards;
  animation-delay: 0.7s;
`;
export const HeartMsg = styled.img`
  position: relative;
  width: 191px;
  height: 80px;
  top: -980px;
  right: 100px;
  opacity: 0;
  transform: scale(0.8);
  animation: ${dropAnimation} 1.5s ease forwards;
  animation-delay: 1s;
`;
export const HeartMsg1 = styled.img`
  position: relative;
  width: 220px;
  height: 60px;
  top: -870px;
  right: -80px;
  opacity: 0;
  animation: ${dropAnimation} 1.5s ease forwards;
  animation-delay: 1.5s;
`;
export const HeartMsg2 = styled.img`
  position: relative;
  width: 220px;
  height: 60px;
  top: -990px;
  right: -80px;
  opacity: 0;
  animation: ${dropAnimation} 1.5s ease forwards;
  animation-delay: 2s;
`;
// SecondMobileImg2 with fade-in effect
export const SecondMobileImg2 = styled.img`
  right: -50px;
  top: -550px;
  position: relative;
  width: 281px;
  height: 370px;
  opacity: 0;
  /* Apply fadeIn animation */
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 0s; /* Delay to control when it appears */
`;

interface ThinkingMsgProps {
  isVisible: boolean;
}

// Blurred effect based on isBlurred prop
export const SecondMobileImg = styled.img<{ isBlurred: boolean }>`
  margin-right: 80px;
  display: flex;
  width: 262px;
  height: 284px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;

  flex-shrink: 0;
  ${(props) =>
    props.isBlurred &&
    css`
      filter: blur(1.5px);
      opacity: 0.5;
      transition: filter 0.5s, opacity 0.5s;
    `}
`;

export const ThinkingFace = styled.img<{ isBlurred: boolean }>`
  position: relative;
  top: -120px;
  right: -100px;
  width: 96px;
  height: 96px;

  ${(props) =>
    props.isBlurred &&
    css`
      filter: blur(5px);
      opacity: 0.5;
      transition: filter 0.5s, opacity 0.5s;
    `}
`;

export const ThinkingMsg1 = styled.img<
  ThinkingMsgProps & { isBlurred: boolean }
>`
  position: relative;
  top: -280px;
  right: -100px;
  width: 190px;
  height: 70px;
  opacity: 0;

  ${(props) =>
    props.isVisible &&
    css`
      animation: ${dropAnimation} 1.5s ease forwards;
      animation-delay: 0s;
    `}
  ${(props) =>
    props.isBlurred &&
    css`
      filter: blur(5px);
      opacity: 0.5;
      transition: filter 0.5s, opacity 0.5s;
    `}
`;

export const ThinkingMsg2 = styled.img<
  ThinkingMsgProps & { isBlurred: boolean }
>`
  position: relative;
  top: -420px;
  right: -100px;
  width: 157px;
  height: 80px;
  opacity: 0;

  ${(props) =>
    props.isVisible &&
    css`
      animation: ${dropAnimation} 1.5s ease forwards;
      animation-delay: 1s;
    `}
  ${(props) =>
    props.isBlurred &&
    css`
      filter: blur(5px);
      opacity: 0.5;
      transition: filter 0.5s, opacity 0.5s;
    `}
`;

export const ThinkingMsg3 = styled.img<
  ThinkingMsgProps & { isBlurred: boolean }
>`
  position: relative;
  top: -323px;
  right: 24px;
  width: 170px;
  height: 80px;
  opacity: 0;

  ${(props) =>
    props.isVisible &&
    css`
      animation: ${dropAnimation} 1.5s ease forwards;
      animation-delay: 2s;
    `}

  ${(props) =>
    props.isBlurred &&
    css`
      filter: blur(5px);
      opacity: 0.5;
      transition: filter 0.5s, opacity 0.5s;
    `}
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  flex-direction: column;
  height: auto;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Pretendard", sans-serif;
  flex-direction: column;
  margin-right: 200px;
  height: 100vh;
`;

export const Title = styled.div`
  font-weight: 100;
  font-size: 20px;
  color: #223345;
`;

export const Text = styled.div`
  font-weight: 700;
  font-size: calc(40px + 0.3vw);
  color: #223345;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const TextWrapper = styled.div`
  margin-left: 240px;
`;

export const Logo = styled.img`
  width: calc(45px + 29vw);
`;

export const ArrowLogo = styled.img`
  width: calc(20px + 7vw);
  margin: -45px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 160px;
`;

export const MobileTitle = styled.div`
  font-weight: 300;
  width: 83%;
  font-size: 3vw; /* 화면 너비의 4% 크기 */
  text-align: left; /* Left align the text */
  color: #223345;
  margin-bottom: 5px;
`;

export const MobileText = styled.div<{ isEnglish: boolean }>`
  font-weight: 700;
  font-size: ${({ isEnglish }) => (isEnglish ? "5vw" : "7vw")};
  color: #223345;
  justify-content: center;
  text-align: left;
  width: 83%;
`;

export const MobileLogo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

export const MobileContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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

export const MobileTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  flex-direction: column;
  margin: 0 20px;
  margin-bottom: -1100px;
  width: 100%;
  padding: 60px 0;
`;
export const expandImg = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  bottom: -760px;
`;
