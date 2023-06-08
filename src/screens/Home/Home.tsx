// Libs
import React, { useContext, useEffect, useState } from "react";

// Context
import { AppContext } from "../../context";

// Service
import { productService } from "../../services";

// Components
import { Banner, Layout, ListProducts } from "../../components";

// Types
import { ProductListDTO } from "../../types";

// Styles
import * as S from "./styles";

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
    <Layout>
      <S.HomeWrapper>
        <Banner items={products} />
        <ListProducts
          products={products as []}
          searchProduct={searchProduct as []}
          isLoading={loading}
        />
      </S.HomeWrapper>
    </Layout>
  );
};
