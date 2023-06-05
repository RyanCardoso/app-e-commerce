// Libs
import React from "react";

// Styles
import * as S from "./styles";

export const Button = ({ label, backgroundColor, color }: any) => {
  return (
    <S.ButtonWrapper backgroundColor={backgroundColor} color={color}>
      <S.ButtonLabel>{label}</S.ButtonLabel>
    </S.ButtonWrapper>
  );
};
