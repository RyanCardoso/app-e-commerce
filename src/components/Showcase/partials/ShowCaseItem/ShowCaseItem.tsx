// Libs
import React from "react";
import { Dimensions, Image, View } from "react-native";

// Types
import { ShowcaseItemProps } from "../../../../types";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

export const ShowcaseItem = ({ item, index }: ShowcaseItemProps) => {
  return (
    <View key={index} style={{ width: SLIDER_WIDTH }}>
      <Image
        style={{ borderRadius: 5, height: ITEM_WIDTH }}
        source={{ uri: item }}
      />
    </View>
  );
};
