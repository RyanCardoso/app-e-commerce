// Libs
import React from "react";

// Components
import { Header } from "../Header";

// Styles
import * as S from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.WrapperLayout>
      <Header />
      <S.ContentLayout>{children}</S.ContentLayout>
    </S.WrapperLayout>
  );
};
