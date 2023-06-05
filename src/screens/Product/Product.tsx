// Libs
import React, { useState, useEffect } from "react";
import { StatusBar, Dimensions, Text, View, Image } from "react-native";
// import { StatusBar } from "expo-status-bar";
import Carousel from "react-native-snap-carousel";

// Components
import { Button, ProductDetails, Rating } from "../../components";

// Types
import { ProductDTO, ProductScreenProps } from "../../types";

// Styles
import * as S from "./styles";
import { discontCalc, formatPrice } from "../../utils";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

export const Product: React.FC<ProductScreenProps> = ({
  route,
  navigation,
}) => {
  const { productId } = route.params;

  const [product, setProduct] = useState<ProductDTO>({} as ProductDTO);

  const getProduct = () => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then(setProduct);
  };

  const renderCarouselItem = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => (
    <View key={index} style={{ width: ITEM_WIDTH }}>
      <Image
        style={{ borderRadius: 5, height: ITEM_WIDTH }}
        source={{ uri: item }}
      />
    </View>
  );

  useEffect(() => {
    if (productId) getProduct();
  }, [productId]);

  return (
    <S.ProductWrapper>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <S.ProductScroll contentContainerStyle={{ paddingVertical: 16 }}>
        <S.ProductHeader>
          <S.ProductTitle>{product.title}</S.ProductTitle>
          <Rating rating={product.rating as number} />
        </S.ProductHeader>

        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Carousel
            data={product.images as string[]}
            renderItem={renderCarouselItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
          />
        </View>

        <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
          {/* Discount */}
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={{ color: "#CC0C39", fontSize: 28 }}>
              -{product.discountPercentage}%
            </Text>
            <Text style={{ fontSize: 28 }}>
              {discontCalc(product.price, product.discountPercentage)}
            </Text>
          </View>

          {/* Price with discount */}
          <Text>
            De{" "}
            <Text style={{ textDecorationLine: "line-through" }}>
              {formatPrice(product.price || 0)}
            </Text>
          </Text>

          {/* Actions */}
          <View style={{ gap: 10, paddingVertical: 16 }}>
            <Text>Em estoque: {product.stock}</Text>

            <Button label="Adicionar ao carrinho" />
            <Button label="Comprar agora" backgroundColor="#FFD814" />
          </View>
        </View>

        <ProductDetails
          brand={product.brand}
          category={product.category}
          title={product.title}
          description={product.description}
        />
      </S.ProductScroll>
    </S.ProductWrapper>
  );
};
