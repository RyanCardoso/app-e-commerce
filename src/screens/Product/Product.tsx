// Libs
import React from "react";
import { Text } from "react-native";

// Styles
import * as S from "./styles";

// Types
import { ProductScreenProps } from "../../types";

export const Product: React.FC<ProductScreenProps> = ({
  route,
  navigation,
}) => {
  const { productId } = route.params;

  return (
    <S.ProductWrapper>
      <Text>{productId}</Text>
    </S.ProductWrapper>
  );
};
