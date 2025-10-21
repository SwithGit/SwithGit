import styled from "styled-components";
import { MEDIA_QUERIES } from "../../style/mediaQueries";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  font-size: 24px;
  position: fixed;
  font-size: calc(16px + 0.5vw);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(13px);
  opacity: 1;
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 1px solid #eeeeee;

  @media ${MEDIA_QUERIES.mobile} {
    height: 50px;
    font-size: 14px;
  }
`;

export const NavTitle = styled.div`
  color: #454545;
  flex: 0 1 auto;
  position: relative;
  left: 40px;
  cursor: pointer;
  font-size: calc(16px + 0.5vw);
`;

export const NavMenu = styled.div`
  font-weight: lighter;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-size: 14px;
  font-family: "Pretendard", sans-serif;
  flex: 0.18 1 auto;
  color: #555555;

  span {
    color: #eeeeee;
  }

  font-size: calc(8px + 0.4vw);
  margin-right: 50px;

  @media ${MEDIA_QUERIES.mobile} {
    gap: 15px;
    margin-left: 100px;
  }

  @media ${MEDIA_QUERIES.tablet} {
    gap: 20px;
    margin-left: 80px;
  }
`;

export const NavMenuLogin = styled.div<{ isEnglish?: boolean }>`
  font-size: 20px;
  margin-top: 39px;
  font-weight: 400;
  margin-left: ${({ isEnglish }) => (isEnglish ? "-60px" : "-55px")};
`;
export const NavMenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  @media ${MEDIA_QUERIES.mobile} {
    font-size: 20px;
    font-family: "Pretendard", sans-serif;
    justify-content: space-between; /* 텍스트와 아이콘을 양쪽 끝으로 배치 */

    padding: 0 20px;
    height: 70px;
    font-weight: 400;
    margin-bottom: -10px;
  }
`;

export const EarthImg = styled.img<{ isDarkEarth?: boolean }>`
  width: ${({ isDarkEarth }) => (isDarkEarth ? "40px" : "calc(10px + 0.5vw)")};
  height: ${({ isDarkEarth }) => (isDarkEarth ? "40px" : "calc(10px + 0.5vw)")};
  margin-right: 20px;
  padding-right: ${({ isDarkEarth }) => (isDarkEarth ? "-22px" : "10px")};
  margin-bottom: -4px;
  cursor: pointer;
  @media ${MEDIA_QUERIES.mobile} {
    margin-top: -32px;
    width: 20px;
    height: 20px;
    margin-left: -17px;
  }
`;

export const Logo = styled.img`
  width: calc(20px + 2vw);
  margin-left: 50px;

  @media ${MEDIA_QUERIES.mobile} {
    margin-left: -20px;
    width: calc(20px + 5vw);
  }
`;

export const NavEarthContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  min-width: 200px;
  margin-right: -90px;

  @media (max-width: 768px) {
    margin-right: -50px;
  }

  @media (max-width: 500px) {
    margin-right: 0px; // 모바일에서 margin 제거
    min-width: 100px; // 최소 너비 축소
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;
export const CloseMenuButton = styled.div`
  font-size: 24px;
  margin-left: 79%;
  margin-top: 8px;
  margin-bottom: 15px;
`;
export const LanguageText = styled.span`
  font-size: 14px; /* 기본 크기 */
  margin-left: -20px;
  font-family: "Pretendard", sans-serif;
  margin-top: -28px;
  color: #c4c4c4;
`;

export const LanguageLoginText = styled.span`
  font-size: 10px; /* 기본 크기 */
  margin-left: 10px;
  margin-top: -28px;
  font-family: "Pretendard", sans-serif;
`;
export const DropdownButton = styled.div`
  background-color: transparent;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 16px;
  color: #333;
  border: none;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: #ffffff;
  min-width: 120px;
  width: 80%;
  border-radius: 8px;
  margin-top: 11px;
  right: 22px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

  @media (max-width: 500px) {
    width: 100%;
    right: 0;
  }
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;

  &:hover {
    background-color: #f1f1f1;
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  & + &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    border-top: 1px solid #eee;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 500px) {
    gap: 15px;
  }
`;

export const ActionButton = styled.button`
  background-color: #fdd835;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: #fbc02d;
  }

  @media (max-width: 500px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #999;
  font-size: 12px;

  hr {
    flex-grow: 1;
    border: none;
    border-top: 1px solid #eee;
  }
`;

export const SuccessMessage = styled.div`
  text-align: center;
  color: #333;
  font-size: 16px;
  margin-top: 20px;
`;

// 햄버거 메뉴 스타일 추가
export const HamburgerMenu = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 28px;
  color: #454545;
  z-index: 1001;
`;

// 모바일 메뉴 컨테이너 (오른쪽에서 슬라이드)
export const MobileNavMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  width: 55%;
  height: 100vh;
  margin-top: 50px;
  background-color: white;
  box-shadow: -10px 0px 25px 0px rgba(0, 0, 0, 0.25);

  z-index: 1000;
  display: flex;
  flex-direction: column;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  &::after {
    content: "";
    position: fixed;
    top: 0;
    right: 100%; /* 메뉴의 왼쪽(나머지 50%)을 덮도록 설정 */
    width: 50vw; /* 남은 화면 크기를 50vw로 설정 */
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4); /* 어두운 배경색 */
    z-index: 1000; /* 메뉴 뒤에 배경이 나타나게 설정 */
    pointer-events: none; /* 배경 클릭 이벤트 방지 */
  }
`;
// 언어 및 로그인 상단 섹션 컨테이너
export const LanguageLoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  // border-bottom: 1px solid #eaeaea;
`;
// 하단 메뉴 스타일 (이용약관, 개인정보처리방침)
export const MobileNavMenuFooter = styled.div`
  position: absolute;
  margin-top: 85vh;
  font-weight: 200;
  @media (max-height: 667px) {
    margin-top: 80vh;
  }
`;
export const StyledloginHr = styled.hr`
  border: none;
  border-bottom: 1px solid #eaeaea; /* 기존 border-bottom 스타일 적용 */
  margin-top: -20px;
  padding: 0;
  width: 80%; /* 전체 너비 차지 */
`;
export const StyledHr = styled.hr`
  border: none;
  border-bottom: 1px solid #eaeaea; /* 기존 border-bottom 스타일 적용 */
  margin: 0; /* 기본 마진 제거 */
  padding: 0;
  width: 80%; /* 전체 너비 차지 */
  margin-top: 1px;
  margin-left: 20px;
`;
export const FooterNavMenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  @media ${MEDIA_QUERIES.mobile} {
    font-size: 14px;
    font-family: "Pretendard", sans-serif;
    justify-content: space-between; /* 텍스트와 아이콘을 양쪽 끝으로 배치 */
    width: 110%;
    padding: 0 20px;
    font-weight: 200;
    height: 18px;
    font-weight: 200;
    margin-bottom: 20px;
  }
`;
