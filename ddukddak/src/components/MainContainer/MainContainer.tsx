import React, { ReactNode } from "react";
import * as S from "./MainContainer.style";
import Page from "../main/Page/Page";

interface MainContainerProps {
  children?: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <S.Container>
      <S.Content>
        <Page />
        {children}
      </S.Content>
    </S.Container>
  );
};

export default MainContainer;
