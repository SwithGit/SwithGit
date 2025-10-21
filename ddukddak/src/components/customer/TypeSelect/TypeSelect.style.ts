import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
`;

export const SelectedOption = styled.div<{ isPlaceholder: boolean }>`
  font-family: "Pretendard", sans-serif;
  height: 22px;
  padding: 10px 12px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  font-size: 16px;
  /* font-weight: 300 ; */
  background-color: #ffffff;
  color: ${({ isPlaceholder }) => (isPlaceholder ? "#c4c4c4" : "#223345")};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 99.8%;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  background-color: #ffffff;
  z-index: 1000;
`;

export const Option = styled.div<{ isSelected: boolean }>`
  padding: 15px 12px;
  font-size: 16px;
  color: #223345;
  cursor: pointer;
  border-bottom: 1px solid #c4c4c4;
  background-color: ${({ isSelected }) => (isSelected ? "#EEEEEE" : "white")};
  &:hover {
    background-color: #eeeeee;
  }
  &:active {
    background-color: #c4c4c4;
  }
`;
