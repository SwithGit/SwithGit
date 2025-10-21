import styled from "styled-components";

export const Template = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 8px;
  background-color: #ffffff;
  max-width: 500px;
  margin: 20px auto;
  text-align: center;

  .item-image {
    width: 100%;
    height: auto;
    margin-bottom: 50px;
  }

  .show-btn {
    padding: 20px 230px;
    background-color: #fab92c;
    color: #111111;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    &:hover {
      background-color: #fff7e4;
    }
    &:active {
      background-color: #d1981b;
    }
    @media (max-width: 480px) {
      padding: 10px 70px;
    }
  }
`;
