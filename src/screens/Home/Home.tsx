// Libs
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

// Components
import { Card } from "../../components";

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
    <View style={{ width: "100%", paddingHorizontal: 20 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {products.map((product) => (
          <Card
            id={0}
            key={product.id}
            title={product.title}
            brand={product.brand}
            thumbnail={product.thumbnail}
            rating={product.rating}
            price={product.price}
            discountPercent={product.discountPercentage}
          />
        ))}
      </ScrollView>
    </View>
  );
};
