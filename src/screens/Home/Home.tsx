// Libs
import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";

// Context
import { AppContext } from "../../context";

// Components
import { Card, ListProducts } from "../../components";

// Types
import { ProductListDTO } from "../../types";

// Styles
import * as S from "./styles";
import { productService } from "../../services";
import { CardSkeleton } from "../../components/Card";

export const Home = () => {
  const { searchProduct } = useContext(AppContext);
  const [products, setProducts] = useState<ProductListDTO[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { getAllProducts } = productService;

  const getProducts = async () => {
    setLoading(true);

    try {
      const response = await getAllProducts();
      const { data } = response;

      setLoading(false);
      if (!data || data.total === 0) return;

      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <S.HomeWrapper>
      <ListProducts
        products={products as []}
        searchProduct={searchProduct as []}
        isLoading={loading}
      />
    </S.HomeWrapper>
  );
};
