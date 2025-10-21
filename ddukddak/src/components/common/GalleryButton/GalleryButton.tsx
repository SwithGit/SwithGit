import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #c0c0c0;
  }
`;

interface StyledButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {label}
    </Button>
  );
};

export default StyledButton;
