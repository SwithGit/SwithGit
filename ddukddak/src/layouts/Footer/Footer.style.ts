import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  font-family: "Pretendard", sans-serif;
  height: auto;
  margin-top: auto;
  @media screen and (max-width: 500px) {
    max-width: 400px;
  }
`;

export const ContentContainer = styled.div`
  /* margin-right: 50px; */
  /* width: 110%; */
  width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 26px 0;
  border-top: 1px solid #f5f5f5;

  @media screen and (max-width: 404px) {
    padding: 20px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit; /* 텍스트 색상을 부모 요소의 색상으로 설정 */
  &:hover {
    text-decoration: underline; /* 호버 시 밑줄 표시 */
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  max-width: 508px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 24px;
  }

  & > svg {
    cursor: pointer;
  }
`;
export const LogoSecindContainer = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 24px;
  }

  & > svg {
    cursor: pointer;
  }
`;

export const LogoContainerDetail = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen {
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  gap: 12px;

  @media screen and (max-width: 404px) {
    gap: 4px;
  }
`;

export const Row = styled.div`
  height: 35px;
  line-height: 35px;
  display: flex;
  gap: 10px;

  .first-child,
  &.third {
    display: none;
  }
  .last-child {
    display: contents;
  }

  @media screen and (max-width: 630px) {
    .last-child {
      display: none;
    }
    .first-child,
    &.third {
      display: contents;
    }
  }

  @media (max-width: 404px) {
    gap: 4px;
  }
`;
