import styled, { keyframes } from "styled-components";

interface DelayProps {
  delay: string;
}
interface TextProps {
  isEnglish: boolean;
}
interface TextContainerProps extends DelayProps {
  isEnglish?: boolean;
}

interface TitleProps extends DelayProps {
  isEnglish?: boolean;
  underlineLeft?: string;
  underlineWidth?: string;
}
// 곡선이 내려오는 애니메이션
const dropDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

// 선이 위에서 아래로 서서히 나타나는 애니메이션
const drawLine = keyframes`
  0% {
    clip-path: inset(0 0 100% 0); /* 선의 상단 부분이 보이지 않도록 설정 */
  }
  100% {
    clip-path: inset(0 0 0 0); /* 선 전체가 보이도록 설정 */
  }
`;

const fadeInLine = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const showDot = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const drawUnderlineAndDot = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  80% {
    width: var(--underlineWidth); /* width 값을 props로 설정 */
    opacity: 1;
  }
  100% {
    width: var(--underlineWidth); /* width 값을 props로 설정 */
    opacity: 1;
    background-color: #ffb400;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

export const Logo = styled.img`
  width: calc(45px + 29vw);
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const CurveLine = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 42%;
  transform: translateX(-50%);
  animation: ${dropDown} 3s ease forwards;
  animation-delay: 1s;
`;

export const Line = styled.img<DelayProps>`
  height: 128%;
  width: 70%;
  position: absolute;
  margin-left: -900px;
  animation: ${drawLine} 0.7s ease forwards;
  animation-delay: ${(props) => props.delay};
`;

// 동그라미 스타일
export const Circle = styled.img<DelayProps & { top: string; left: string }>`
  width: 50px;
  height: 50px;
  position: absolute;
  opacity: 0; /* 초기 상태에서 보이지 않도록 설정 */
  animation: ${fadeInLine} 2s ease forwards;
  animation-delay: ${(props) => props.delay};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: translate(-50%, -50%);
  @media (max-width: 1890px) {
    margin-left: -10px;
  }
  @media (max-width: 1800px) {
    margin-left: -20px;
  }
  @media (max-width: 1650px) {
    margin-left: -30px;
  }
  @media (max-width: 1500px) {
    margin-left: -40px;
  }
  @media (max-width: 1400px) {
    margin-left: -65px;
  }
  @media (max-width: 1300px) {
    margin-left: -80px;
  }
`;

export const InnerCircle = styled.img<
  DelayProps & { top: string; left: string }
>`
  width: 25px;
  height: 25px;
  position: absolute;
  opacity: 0;
  animation: ${fadeInLine} 2s ease forwards;
  animation-delay: ${(props) => props.delay};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: translate(-50%, -50%);
`;

export const Text = styled.div<TextProps>`
  font-weight: lighter !important;
  font-size: ${(props) =>
    props.isEnglish ? "calc(13px + 0.04vw)" : "calc(13px + 0.3vw)"};
  color: #223345;
  margin-bottom: 80px;
  div {
    margin: 7px;
  }
`;

export const Title = styled.div<TitleProps>`
  font-weight: 700;
  font-size: calc(26px + 0.3vw);
  color: #223345;
  margin-top: 10px;
  margin-bottom: 15px;
  position: relative;

  &::after {
    opacity: 0;
    content: "";
    position: absolute;
    bottom: 2px;
    z-index: -10;
    left: ${(props) => props.underlineLeft || "0px"};
    width: ${(props) => props.underlineWidth || "100px"};
    height: 8px;
    background-color: #ffb400;
    animation: ${drawUnderlineAndDot} 1s ease forwards;
    animation-delay: ${(props) => props.delay};
    --underlineWidth: ${(props) => props.underlineWidth || "100px"};
  }

  &::before {
    z-index: -10;
    content: "";
    position: absolute;
    bottom: 2px;
    left: calc(
      ${(props) => props.underlineLeft || "0px"} +
        ${(props) => parseInt(props.underlineWidth || "100", 10)}px + 5px
    );
    width: 8px;
    height: 8px;
    background-color: #ffb400;
    border-radius: 50%;
    transform: scale(0);
    opacity: 0;
    animation: ${showDot} 0.3s ease forwards;
    animation-delay: calc(${(props) => props.delay} + 0.6s);
  }
`;
export const TextWrapper = styled.div`
  margin-top: 90px;
  margin-left: 200px;
  flex-direction: column;
`;

export const TextContainer = styled.div<TextContainerProps>`
  opacity: 0;
  animation: ${fadeInLine} 1s ease forwards;
  animation-delay: ${(props) => props.delay};

  /* 영어일 때만 살짝 위로 올리기 */
  margin-top: ${(props) => (props.isEnglish ? "-35px" : "0")};
`;

export const MobileThirdImg = styled.img`
  width: 100%;
  max-width: 430px;
  height: 434px; //원래 464px
`;

export const MobileThirdContainer = styled.div`
  margin-top: 20px;
  /* width: 100%; */
  max-width: 302px; // 원래 332px
  height: 100%;
  max-height: 155px;
  border-radius: 12px;
  border: 1px solid #c4c4c4;
  padding: 24px;
  color: #223345;

  /* 가운데 정렬을 위해 추가된 속성 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 12px;
  margin-left: auto;
  margin-right: auto;
`;

export const MobileContainerTitle = styled.div`
  font-size: 25.5px; //원래 28px
  font-weight: 700;
  text-align: center;
`;

export const MobileMiniContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 331px;
  max-height: 35px;
  gap: 8px;
  display: flex;
  align-items: flex-start;
  margin-top: 8px;
`;

export const MobileMiniContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 119px;
  max-height: 17px; //원래 19px
  padding: 8px 9px;
  font-size: 14.1px; //원래 16px
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  border-radius: 20px;
  font-weight: 200;
  border: 1px solid #c4c4c4;
`;

export const MobileContainerText = styled.div`
  font-weight: 300;
  font-size: 14.5px; //원래 16px
  margin-top: 12px;
  span {
    font-weight: 500;
  }
`;

export const MobileExpandImg = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 80px;
`;

export const SlideContainer = styled.div`
  position: relative;
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Indicator = styled.div<{ active: boolean }>`
  width: ${(props) => (props.active ? "32px" : "8px")};
  height: 8px;
  margin: 0 4px;
  border-radius: ${(props) => (props.active ? "4px" : "50%")};
  background-color: ${(props) => (props.active ? "#ffb400" : "#c4c4c4")};
  cursor: pointer;
`;

//손잡이
export const ArrowButton = styled.div`
  position: absolute;
  top: 41%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// 왼쪽 화살표 버튼
export const ArrowLeft = styled(ArrowButton)`
  left: -14px;
  top: 125px;
`;

// 오른쪽 화살표 버튼
export const ArrowRight = styled(ArrowButton)`
  right: -14px;
  top: 125px;
`;

export const ArrowBtn = styled.img`
  width: 34px;
  height: 34px;
`;
