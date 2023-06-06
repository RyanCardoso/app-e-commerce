// Libs
import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";

// Context
import { AppContext } from "../../context";

// Components
import { Card } from "../../components";

// Types
import { ProductListDTO } from "../../types";

// Styles
import * as S from "./styles";

export const Home = () => {
  const { searchProduct } = useContext(AppContext);
  const [products, setProducts] = useState<ProductListDTO[] | null>(null);

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
        contentContainerStyle={{ paddingHorizontal: 5 }}
      >
        {(searchProduct || products)?.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            brand={product.brand}
            thumbnail={product.thumbnail}
            rating={product.rating}
            price={product.price}
            discountPercentage={product.discountPercentage}
            stock={product.stock}
            category={product.category}
          />
        ))}
      </ScrollView>
    </S.HomeWrapper>
  );
};
