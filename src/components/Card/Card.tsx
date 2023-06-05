// Libs
import React from "react";
import StarRating from "react-native-star-rating";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

// Utils
import { formatPrice, discontCalc } from "../../utils";

// Types
import { CardProps } from "../../types";

// Style
import * as S from "./styles";

export const Card = ({
  id,
  title,
  brand,
  thumbnail,
  rating,
  price,
  discountPercent,
}: CardProps) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handleClickDetails = () => {
    navigation.navigate("Product", {
      productId: id,
    });
  };

  return (
    <S.CardWrapper>
      <S.CardImageWrapper>
        <S.CardImage source={{ uri: thumbnail }} />
        <S.CardFavoriteWrapper></S.CardFavoriteWrapper>
      </S.CardImageWrapper>

      <S.CardContent>
        <S.CardName>{title}</S.CardName>
        <S.CardBrand>Marca: {brand}</S.CardBrand>

        <S.CardDiscountPrice>
          {formatPrice(discontCalc(price, discountPercent))}
        </S.CardDiscountPrice>

        <S.CardPrice>
          De{" "}
          <Text style={{ textDecorationLine: "line-through" }}>
            {formatPrice(price)}
          </Text>
        </S.CardPrice>

        <S.CardPromotion>{discountPercent}% de desconto</S.CardPromotion>

        <S.CardRatingWrapper>
          <S.CardRating>{rating}</S.CardRating>
          {/* <StarRating
            disabled
            maxStars={5}
            rating={rating}
            starSize={15}
            fullStarColor="gold"
            emptyStarColor="gray"
            containerStyle={{ width: 90 }}
          /> */}
        </S.CardRatingWrapper>

        <S.CardActionsWrapper>
          <S.CardActionDetails onPress={handleClickDetails}>
            <Text style={{ textDecorationLine: "underline" }}>Ver mais</Text>
          </S.CardActionDetails>

          <S.CardActionCart>
            <Text style={{ color: "white" }}>ADD</Text>
          </S.CardActionCart>
        </S.CardActionsWrapper>
      </S.CardContent>
    </S.CardWrapper>
  );
};
