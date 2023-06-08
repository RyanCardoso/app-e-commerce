// Libs
import React from "react";
import { Text, TouchableOpacity } from "react-native";

// Style
import * as S from "./styles";

interface BottomBarProps {
  priceTotal: number | string;
  onPressClear: () => void;
}

export const BottomBar = ({ priceTotal, onPressClear }: BottomBarProps) => {
  return (
    <S.BottomBar>
      <TouchableOpacity onPress={onPressClear}>
        <Text>Limpar Carrinho</Text>
      </TouchableOpacity>
      <Text>Total: {priceTotal}</Text>
    </S.BottomBar>
  );
};
