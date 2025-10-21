import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 150px;
  padding-bottom: 25px;
  margin-top: -380px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const MobileSliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: -150px;
  margin-bottom: -45px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 375px) and (max-height: 667px) {
    margin-top: -190px;
    margin-bottom: -0px;
  }
  @media screen and (max-width: 320px) and (max-height: 674px) {
    margin-top: -100px;
    margin-bottom: -0px;
  }
`;

export const SlideWrapper = styled.div`
  display: flex;
  width: calc(190%);
  animation: slide 20s linear infinite;

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;
export const MobileSlideWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  width: calc(100%);
  animation: slide 20s linear infinite;

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-250%);
    }
  }
`;

export const Slide = styled.div`
  flex: 0 4 auto;
  width: 15%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 270px;
`;
export const MobileSlide = styled.div`
  flex: 0 0 20%;
  margin: 0 -10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
`;

export const Image = styled.img`
  object-fit: contain;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.15);
  }
`;

export const MobileImage = styled.img`
  width: auto;
  height: auto;
  max-width: 250px;
  max-height: 150px;
  margin: 0 15px;
  object-fit: contain;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.15);
  }
  @media screen and (max-width: 380px) and (max-height: 770px) {
    max-width: 240px;
    max-height: 110px;
  }
  @media screen and (max-width: 375px) and (max-height: 667px) {
    max-height: 60px;
  }
  @media screen and (max-width: 360px) and (max-height: 740px) {
    max-height: 90px;
  }
  @media screen and (max-width: 320px) and (max-height: 674px) {
    max-height: 80px;
  }
  @media screen and (max-width: 398px) and (max-height: 745px) {
    max-height: 115px;
  }
`;
