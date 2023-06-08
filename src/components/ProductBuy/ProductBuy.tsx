// Libs
import React, { useContext } from "react";
import { Text } from "react-native";

// Context
import { AppContext } from "../../context";

// Components
import { Button } from "../Button";

// Utils
import { discontCalc, formatPrice } from "../../utils";

// Types
import { ProductBuyProps } from "../../types";

// Styles
import * as S from "./styles";

export const ProductBuy = ({
  id,
  title,
  thumbnail,
  discountPercentage,
  price,
  stock,
}: ProductBuyProps) => {
  const { addToCart } = useContext(AppContext);

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      thumbnail,
      price,
    });
  };

  return (
    <S.ProductBuyWrapper>
      <S.ProductDiscountWrapper>
        <S.ProductDiscount style={{ color: "#cc0c39" }}>
          -{discountPercentage}%
        </S.ProductDiscount>
        <S.ProductDiscount>
          {discontCalc(price, discountPercentage)}
        </S.ProductDiscount>
      </S.ProductDiscountWrapper>

      <Text>
        De <S.ProductPrice>{formatPrice(price || 0)}</S.ProductPrice>
      </Text>

      <S.ProductActionsWrapper>
        <Text>Em estoque: {stock}</Text>

        <Button label="Adicionar ao carrinho" onPress={handleAddToCart} />
        <Button
          label="Comprar agora"
          backgroundColor="#FFD814"
          onPress={() => console.log("Em desenvolvimento")}
        />
      </S.ProductActionsWrapper>
    </S.ProductBuyWrapper>
  );
};
