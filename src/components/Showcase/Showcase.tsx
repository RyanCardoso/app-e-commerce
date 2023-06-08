// Libs
import React from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

// Components
import { ShowcaseItem } from "./partials";

// Types
import { ShowcaseProps } from "../../types";

// Style
import * as S from "./styles";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

export const Showcase = ({ images }: ShowcaseProps) => {
  return (
    <S.ShowcaseWrapper>
      <Carousel
        mode="parallax"
        loop={false}
        defaultIndex={0}
        data={images}
        renderItem={ShowcaseItem}
        width={SLIDER_WIDTH}
        height={ITEM_WIDTH}
      />
    </S.ShowcaseWrapper>
  );
};
