import React from "react";
import * as S from "./Button.style";

interface ButtonProps {
  text: string; // 버튼에 표시될 텍스트
  disabled?: boolean; // 버튼의 활성화 상태
  onClick?: () => void; // 버튼 클릭 시 실행될 함수
}

const Button: React.FC<ButtonProps> = ({ text, disabled = false, onClick }) => {
  return (
    <S.BtnWrapper>
      <S.Btn disabled={disabled} onClick={onClick}>
        {text}
      </S.Btn>
    </S.BtnWrapper>
  );
};

export default Button;
