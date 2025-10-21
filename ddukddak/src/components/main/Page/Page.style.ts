import styled, { css } from "styled-components";

export const PageContainer = styled.div<{ isMobile?: boolean }>`
  height: ${(props) => (props.isMobile ? "auto" : "100vh")};
  min-height: ${(props) => (props.isMobile ? "auto" : "100vh")};

  overflow-y: ${(props) => (props.isMobile ? "auto" : "scroll")};
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  /* 모바일 환경에서는 scroll-snap-type을 제거 */
  ${(props) =>
    !props.isMobile &&
    css`
      scroll-snap-type: y mandatory;
    `}
`;

export const Section = styled.div<{ isMobile?: boolean }>`
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  /* 모바일 환경에서는 scroll-snap-align을 제거 */
  ${(props) =>
    !props.isMobile &&
    css`
      scroll-snap-align: start;
    `}
`;

export const Nav = styled.div`
  position: fixed;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
`;

export const NavButton = styled.button<{ active?: boolean }>`
  background-color: rgba(196, 196, 196, 0.4);
  border: 1px solid rgba(196, 196, 196, 0.4);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  transform: scale(0.5);
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s, width 0.3s, height 0.3s;

  ${(props) =>
    props.active &&
    css`
      background-color: #fab92c;
      border-color: #fab92c;

      &:before,
      &:after {
        content: "";
        position: absolute;
        border-radius: 50%;
        border: 2px solid #fab92c;
      }

      &:before {
        width: 20px;
        height: 20px;
        top: -5px;
        left: -5px;
      }

      &:after {
        width: 28px;
        height: 28px;
        top: -9px;
        left: -9px;
      }
    `}
`;

export const NavText = styled.span`
  color: #fab92c;
  font-size: 13px;
  margin-left: 12px;
  font-family: pretendard;
`;
