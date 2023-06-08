// Libs
import React from "react";
import { Text, View } from "react-native";

// Utils
import { formatPrice } from "../../utils";

import * as S from "./styles";

// Types
import { CarItem } from "../../types";

interface CardCartProps {
  item: CarItem;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
  onDeleteCart: () => void;
}

export const CardCart = ({
  item,
  onAddToCart,
  onRemoveFromCart,
  onDeleteCart,
}: CardCartProps) => {
  return (
    <S.CardCartWrapper>
      <S.CardCartImg source={{ uri: item?.thumbnail }} />

      <S.CardCartContent>
        <View>
          <Text>{item?.title}</Text>
          <Text>{formatPrice(item?.price)}</Text>
        </View>

        <S.CardCartAcionWrapper>
          <S.CardCartActions>
            <S.CardCartAcion onPress={onRemoveFromCart}>
              <Text>-</Text>
            </S.CardCartAcion>

            <Text style={{ width: 50, textAlign: "center" }}>
              {item?.quantity}
            </Text>

            <S.CardCartAcion onPress={onAddToCart}>
              <Text>+</Text>
            </S.CardCartAcion>
          </S.CardCartActions>

          <S.CardCartActionClear onPress={onDeleteCart}>
            <Text>Excluir</Text>
          </S.CardCartActionClear>
        </S.CardCartAcionWrapper>
      </S.CardCartContent>
    </S.CardCartWrapper>
  );
};
