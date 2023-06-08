// Libs
import React from "react";
import StarRating from "react-native-star-rating-widget";

// Styles
import * as S from "./styles";

export const Rating = ({ rating }: { rating: number }) => {
  return (
    <S.RatingWrapper>
      <S.RatingValue>{rating}</S.RatingValue>
      <StarRating
        rating={rating}
        onChange={() => null}
        animationConfig={{ scale: 1 }}
        starStyle={{ width: 10 }}
        starSize={20}
      />
    </S.RatingWrapper>
  );
};
