import styled, { keyframes } from "styled-components";

interface DelayProps {
  delay: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
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
    width: var(--underlineWidth); 
    opacity: 1;
  }
  100% {
    width: var(--underlineWidth);
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
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  flex-direction: column;
  height: 100vh;
`;

export const Text = styled.div`
  font-weight: 100;
  font-size: 17px;
  color: #223345;
  opacity: 0;
  margin-top: 10px;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 0.6s;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: calc(45px + 0.3vw);
  color: #223345;
  margin-top: 10px;
  margin-bottom: 15px;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 0s;
`;

export const Logo = styled.img`
  width: calc(40px + 30vw);
  margin-right: 50px;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 1s;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const LeftAligned = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;

export const ContentList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ContentWrapper = styled.div<{ active: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.active ? "#223345" : "#C4C4C4")};
  margin-bottom: 10px;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 2s;
`;

export const ContentWrapperAR = styled(ContentWrapper)`
  margin-top: 60px;
  margin-bottom: 60px;
  animation-delay: 2.5s;
`;

export const ContentWrapperVR = styled(ContentWrapper)`
  animation-delay: 3s;
`;

export const ContentName = styled.div<
  DelayProps & {
    active: boolean;
    underlineLeft?: string;
    underlineWidth?: string;
    isEnglish?: boolean;
  }
>`
  font-weight: ${(props) => (props.active ? "700" : "500")};
  color: ${(props) => (props.active ? "#223345" : "#C4C4C4")};
  font-size: 24px;
  margin-bottom: 12px;
  position: relative;

  &::after {
    opacity: ${(props) => (props.active ? 1 : 0)};
    content: "";
    position: absolute;
    bottom: 1px;
    z-index: -10;
    opacity: 0;
    left: ${(props) => props.underlineLeft || "0px"};
    width: ${(props) => props.underlineWidth || "100px"};
    height: 7px;
    background-color: #ffb400;
    animation: ${(props) => (props.active ? drawUnderlineAndDot : "none")} 1s
      ease forwards;
    animation-delay: ${(props) => props.delay};
    --underlineWidth: ${(props) => props.underlineWidth || "100px"};
  }

  &::before {
    opacity: ${(props) => (props.active ? 1 : 0)};
    z-index: -10;
    opacity: 0;
    content: "";
    position: absolute;
    bottom: 1px;
    left: calc(
      ${(props) => props.underlineLeft || "0px"} +
        ${(props) => parseInt(props.underlineWidth || "100", 10)}px + 5px
    );
    width: 7px;
    height: 7px;
    background-color: #ffb400;
    border-radius: 50%;
    transform: scale(${(props) => (props.active ? 1 : 0)});
    animation: ${(props) => (props.active ? showDot : "none")} 0.3s ease
      forwards;
    animation-delay: calc(${(props) => props.delay} + 0.8s);
  }
`;

// export const Substance = styled.div<{ active: boolean }>`
//   color: ${(props) => (props.active ? "#223345" : "#C4C4C4")};
//   font-size: 16px;
// `;
export const Substance = styled.div<{ active: boolean; isEnglish: boolean }>`
  color: ${(props) => (props.active ? "#223345" : "#C4C4C4")};
  font-size: ${(props) =>
    props.isEnglish ? "calc(13px + 0.04vw)" : "calc(13px + 0.3vw)"};
`;

export const MobileFourthImg = styled.img`
  width: 100%;
  max-width: 350px;
  height: 253px; //원래 464px
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const MobileThirdContainer = styled.div`
  margin-top: 20px;
  /* width: 100%;   */
  max-width: 302px; // 원래 332px
  height: 100%;
  max-height: 180px; //원래 183
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  max-height: 15px; //원래 19px
  padding: 8px 9px;
  font-size: 13.2px; //원래 16px
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
  width: 100%;
  height: auto;
  max-width: 332px;
  max-height: 95px;
  font-weight: 300;
  font-size: 15px; //원래 16px
  margin-top: 12px;
  span {
    font-weight: 500;
  }
`;

export const MobileExpandImg = styled.img`
  width: 48px;
  height: 48px;
`;

export const SlideContainer = styled.div`
  position: relative;
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 80px;
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
`;

// 오른쪽 화살표 버튼
export const ArrowRight = styled(ArrowButton)`
  right: -14px;
`;

export const ArrowBtn = styled.img`
  width: 34px;
  height: 34px;
`;

export const MobileFourthTitle = styled.div`
  color: #223345;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const MobileFourthSubTitle = styled.div`
  color: #223345;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 30px;
`;
