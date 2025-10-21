import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SelectedOption = styled.div`
  font-family: "Pretendard", sans-serif;
  width: 313px;
  height: 22px;
  padding: 10px 12px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  font-size: 14px;
  background-color: #ffffff;
  color: #454545;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: auto;
  }
`;

export const Arrow = styled.div<{ isOpen: boolean }>`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s;
`;

export const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 340px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  background-color: #ffffff;
  z-index: 1000;
`;

export const Option = styled.div<{ isSelected: boolean }>`
  padding: 15px 12px;

  font-size: 14px;
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#454545")};
  cursor: pointer;
  border-bottom: 1px solid #c4c4c4;
  background-color: ${({ isSelected }) => (isSelected ? "#eeeeee" : "white")};
`;
