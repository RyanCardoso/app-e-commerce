// Libs
import React from "react";
import { Dimensions, View } from "react-native";
import { Skeleton } from "../Skeleton";

// Styles
import * as S from "./styles";

const WIDTH = Dimensions.get("window").width;

export const CardSkeleton = () => {
  return (
    <S.CardWrapper>
      <Skeleton width={WIDTH * 0.45} height="100%" />

      <View style={{ flex: 1, gap: 10, padding: 10 }}>
        <Skeleton width={160} height={30} />
        <Skeleton width={140} height={30} />
        <Skeleton width={140} height={30} />
        <Skeleton width={100} height={30} />
      </View>
    </S.CardWrapper>
  );
};
