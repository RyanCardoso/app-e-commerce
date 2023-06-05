// Libs
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import ToastManager from "toastify-react-native";

// Components
import { Card } from "../../components";

// Types
import { ProductListDTO } from "../../types";

// Styles
import * as S from "./styles";

export const Home = () => {
  const [products, setProducts] = useState<ProductListDTO[]>([]);

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
      <ToastManager
        duration={90000}
        width={360}
        position="bottom"
        style={{ fontSize: 12 }}
      />

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
            discountPercentage={product.discountPercentage}
            stock={product.stock}
            category={product.category}
          />
        ))}
      </ScrollView>
    </S.HomeWrapper>
  );
};
