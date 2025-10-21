import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const PaginationButton = styled.button<{ active?: boolean }>`
  color: ${(props) => (props.active ? "#223345" : "#454545")};
  margin: 0 5px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 0.9rem;
  font-weight: ${(props) => (props.active ? "700" : "normal")};

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;
