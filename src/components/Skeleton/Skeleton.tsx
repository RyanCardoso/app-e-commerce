// Libs
import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, View } from "react-native";

const WIDTH = Dimensions.get("window").width;

interface SkeletonProps {
  width?: number;
  height?: number | string;
}

export const Skeleton = ({
  width = WIDTH * 0.9,
  height = 230,
}: SkeletonProps) => {
  const circleAnimatedValue = useRef(new Animated.Value(0)).current;

  const circleAnimated = () => {
    circleAnimatedValue.setValue(0);
    Animated.timing(circleAnimatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        circleAnimated();
      }, 800);
    });
  };

  useEffect(() => {
    circleAnimated();
  }, []);

  const translateX3 = circleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-(width * 0.2), width],
  });

  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: "#dddfe057",
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={{
          width: "20%",
          height: "100%",
          backgroundColor: "white",
          opacity: 0.5,
          transform: [{ translateX: translateX3 }],
        }}
      />
    </View>
  );
};
