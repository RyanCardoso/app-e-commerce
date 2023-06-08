// Libs
import React from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

// Utils
import { shuffleArray } from "../../utils";

// Components
import { Skeleton } from "../Skeleton";
import { BannerItem } from "./partials";

// Types
import { ProductListDTO } from "../../types";

const SLIDER_WIDTH = Dimensions.get("window").width;

interface BannerProps {
  items: ProductListDTO[] | null;
}

export const Banner = ({ items }: BannerProps) => {
  return items ? (
    <Carousel
      width={SLIDER_WIDTH}
      height={SLIDER_WIDTH}
      data={shuffleArray(items as [])}
      renderItem={BannerItem}
    />
  ) : (
    <Skeleton width={SLIDER_WIDTH} height={SLIDER_WIDTH} />
  );
};
