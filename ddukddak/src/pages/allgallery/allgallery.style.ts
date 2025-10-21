import styled from "styled-components"; // styled-components import

// 스타일 정의
export const GalleryPage = styled.div`
  padding: 20px;
  text-align: center;
`;

export const GalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const GalleryCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Pagination = styled.div`
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  margin: 0 10px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
