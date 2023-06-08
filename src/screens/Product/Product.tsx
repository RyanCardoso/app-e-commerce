// Libs
import React, { useState, useEffect } from "react";
import { Dimensions, Text, View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

// Components
import { Button, Layout, ProductDetails, Rating } from "../../components";

// Types
import { ProductDTO, ProductScreenProps } from "../../types";

// Utils
import { discontCalc, formatPrice } from "../../utils";

// Styles
import * as S from "./styles";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

export const Product: React.FC<ProductScreenProps> = ({ route }) => {
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
    <View key={index} style={{ width: SLIDER_WIDTH }}>
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
    <Layout>
      <S.ProductWrapper>
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
              mode="parallax"
              loop={false}
              defaultIndex={0}
              data={product.images as string[]}
              renderItem={renderCarouselItem}
              width={SLIDER_WIDTH}
              height={ITEM_WIDTH}
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
    </Layout>
  );
};
