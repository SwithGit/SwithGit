import styled from "styled-components";

export const GalleryImg = styled.img`
  width: auto; // 너비는 이미지 비율에 맞춰 자동 조정
  height: 700px; // 높이는 항상 700px로 고정
  min-width: 700px; // 최소 너비 700px
  max-width: 1000px; // 최대 너비 1000px
  object-fit: contain;

  @media (max-width: 480px) {
    min-width: 300px;
  }
`;
