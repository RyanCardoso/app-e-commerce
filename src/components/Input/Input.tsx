// Libs
import React from "react";
import { ActivityIndicator, TextInputProps } from "react-native";

// Styles
import * as S from "./styles";

export interface InputProps extends TextInputProps {
  isLoading?: boolean;
}

export const Input = ({ isLoading, ...props }: InputProps) => {
  return (
    <S.InputWrapper>
      <S.TextInput {...props} />
      {isLoading && <ActivityIndicator size="small" color="#717174" />}
    </S.InputWrapper>
  );
};
