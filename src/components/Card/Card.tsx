// Libs
import React, { memo, useContext } from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Text } from "react-native";
import { Toast } from "toastify-react-native";

// Utils
import { formatPrice, discontCalc } from "../../utils";

// Context
import { AppContext } from "../../context";

// Components
import { Rating } from "../Rating";

// Icons
import IconCart from "../../assets/icons/car.svg";
import IconFavorite from "../../assets/icons/favorite.svg";

// Types
import { CardProps } from "../../types";

// Style
import * as S from "./styles";

export const Card = memo(({ product }: CardProps) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { addToFavorites, addToCart } = useContext(AppContext);

  const {
    id,
    title,
    brand,
    thumbnail,
    rating,
    price,
    discountPercentage,
    stock,
  } = product;

  const handleAddToFavorites = () => {
    addToFavorites({ ...product });

    Toast.success("Produto adicionado aos favoritos!");
  };

  const handleAddToCart = () => {
    addToCart({ id, title, thumbnail, price });
  };

  const redirectToProduct = () => {
    navigation.navigate("Product", {
      productId: id,
    });
  };

  return (
    <S.CardWrapper>
      <S.CardImageWrapper>
        <S.CardImage source={{ uri: thumbnail }} />
        <S.CardFavoriteWrapper onPress={handleAddToFavorites}>
          <IconFavorite width={20} height={20} stroke="pink" strokeWidth={5} />
        </S.CardFavoriteWrapper>
      </S.CardImageWrapper>

      <S.CardContent>
        <S.CardName>{title}</S.CardName>
        <S.CardBrand>Marca: {brand}</S.CardBrand>

        <S.CardDiscountPrice>
          {discontCalc(price, discountPercentage)}
        </S.CardDiscountPrice>

        <S.CardPrice>
          De{" "}
          <Text style={{ textDecorationLine: "line-through" }}>
            {formatPrice(price)}
          </Text>
        </S.CardPrice>

        <S.CardPromotion>{discountPercentage}% de desconto</S.CardPromotion>

        <Rating rating={rating} />

        <S.CardStock>{`${stock} produto${stock > 1 ? "s" : ""}`}</S.CardStock>

        <S.CardActionsWrapper>
          <S.CardActionDetails onPress={redirectToProduct}>
            <Text style={{ textDecorationLine: "underline" }}>Ver mais</Text>
          </S.CardActionDetails>

          <S.CardActionCart onPress={handleAddToCart}>
            <IconCart width={20} height={20} fill="#fff" />
          </S.CardActionCart>
        </S.CardActionsWrapper>
      </S.CardContent>
    </S.CardWrapper>
  );
});
