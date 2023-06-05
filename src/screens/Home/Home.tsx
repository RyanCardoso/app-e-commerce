// Libs
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

// Components
import { Card } from "../../components";

// Styles
import * as S from "./styles";

export const Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <S.HomeWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            brand={product.brand}
            thumbnail={product.thumbnail}
            rating={product.rating}
            price={product.price}
            discountPercent={product.discountPercentage}
          />
        ))}
      </ScrollView>
    </S.HomeWrapper>
  );
};
