import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Pretendard", sans-serif;
  flex-direction: column;
  margin-top: calc(100px + 1vh);
  width: 100%;
  max-width: 1200px;
  height: auto;
  max-height: 257px;

  @media (max-width: 768px) {
    margin-top: calc(50px + 1vh);
    padding: 0 20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Pretendard", sans-serif;
  flex-direction: column;
  height: calc(100vh - 200px);

  @media (max-width: 768px) {
    height: auto;
  }

  @media (max-width: 480px) {
    height: auto;
  }
`;

export const Title = styled.div`
  font-weight: 100;
  font-size: calc(18px + 0.05vw);
  color: #223345;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Text = styled.div`
  font-weight: 700;
  font-size: calc(36px + 0.575vw);
  color: #223345;
  margin-top: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 48px;

  @media (max-width: 768px) {
    font-size: 24px;
    padding-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding-bottom: 16px;
  }
`;

export const TextLine = styled.div`
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
