import React from "react";
import * as S from "./Header.style";

interface HeaderProps {
  title: string;
  text: string;
}

const Header: React.FC<HeaderProps> = ({ title, text }) => {
  return (
    <>
      <S.Container>
        <S.TextContainer>
          <S.Title>{title}</S.Title>
          <S.Text>{text}</S.Text>
          <S.TextLine></S.TextLine>
        </S.TextContainer>
      </S.Container>
    </>
  );
};

export default Header;
