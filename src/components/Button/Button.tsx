// Libs
import React from "react";

// Types
import { ButtonProps } from "../../types";

// Styles
import * as S from "./styles";

export const Button = ({
  label,
  backgroundColor,
  color,
  onPress,
}: ButtonProps) => {
  return (
    <S.ButtonWrapper
      backgroundColor={backgroundColor}
      color={color}
      onPress={onPress}
    >
      <S.ButtonLabel>{label}</S.ButtonLabel>
    </S.ButtonWrapper>
  );
};
