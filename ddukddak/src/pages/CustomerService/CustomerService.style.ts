import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 10px;
    width: auto;
    padding: 0 20px;
  }
`;
