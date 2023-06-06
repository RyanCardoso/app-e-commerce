// Libs
import React from "react";
import StarRating from "react-native-star-rating";

// Styles
import * as S from "./styles";

export const Rating = ({ rating }: { rating: number }) => {
  return (
    <S.RatingWrapper>
      <S.RatingValue>{rating}</S.RatingValue>
      {/* <StarRating
        disabled
        maxStars={5}
        rating={rating}
        starSize={15}
        fullStarColor="gold"
        emptyStarColor="gray"
        containerStyle={{ width: 90 }}
      /> */}
    </S.RatingWrapper>
  );
};
