import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  flex-direction: column;
  height: 100vh;
  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    margin-top: 80px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Pretendard", sans-serif;
  flex-direction: column;
  margin-right: 200px;
  height: 100vh;
  @media (max-width: 768px) {
    margin-right: 0;
    height: auto;
    padding: 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Title = styled.div`
  font-weight: 100;
  font-size: 20px;
  color: #223345;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Text = styled.div`
  font-weight: 700;
  font-size: calc(45px + 0.3vw);
  color: #223345;
  margin-top: 10px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: calc(25px + 0.3vw);
  }
`;

export const Logo = styled.img`
  width: calc(20px + 13vw);
  @media (max-width: 768px) {
    width: calc(50px + 10vw);
  }
`;
export const DownloadLogo = styled.img`
  width: calc(80px + 22vw);
  height: calc(40px + 19vw);
  margin-right: -170px;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-right: 0;
    width: calc(80px + 18vw);
    height: calc(40px + 16vw);
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DownloadContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;
export const LeftAligned = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;

export const DownloadText = styled.div`
  font-size: calc(13px + 0.3vw);
  margin-bottom: 15px;
  span {
    font-weight: 600;
    font-size: calc(12px + 0.5vw);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const DownloadBtn = styled.button`
  min-width: 280px;
  height: 72px;
  background-color: #fab92c;
  font-family: "Pretendard", sans-serif;
  border-radius: 10px;
  border: none;
  font-size: calc(10px + 0.6vw);
  margin-right: 45px;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  &:hover {
    background-color: #fff7e4;
  }
  &:active {
    background-color: #d1981b;
  }
  @media (max-width: 768px) {
    min-width: 160px;
    height: 45px;
    margin-right: 0;
    margin-bottom: 15px;
    font-size: 12px;
  }
`;

export const Specification = styled.div`
  font-size: calc(9px + 0.4vw);
  margin-top: 20px;
  margin-bottom: 15px;
  font-weight: 600;
`;

export const SpecificationDetail = styled.div`
  font-size: calc(7px + 0.4vw);

  span {
    font-weight: 600;
  }
`;

export const DownloadBtnLogo = styled.img`
  width: calc(15px + 1.5vw);

  margin-right: 10px;
`;
