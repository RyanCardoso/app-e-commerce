// Libs
import React, { useContext } from "react";

// Context
import { AppContext } from "../../context";

// Components
import { Card, CardSkeleton } from "../Card";

// Types
import { ListProductsProps } from "../../types";

// Styles
import * as S from "./styles";

export const ListProducts = ({
  products,
  searchProduct,
  isLoading,
}: ListProductsProps) => {
  const { loadingSearch } = useContext(AppContext);

  const productList = searchProduct || products;

  const getUniqueCategories = (): string[] => {
    const categories = productList.map((product) => product.category);
    return [...new Set(categories)];
  };

  return (
    <S.ScrollView>
      {!productList || isLoading || loadingSearch
        ? new Array(6).fill(0).map((_, index) => <CardSkeleton key={index} />)
        : products &&
          getUniqueCategories()?.map((category) => (
            <S.CategoryWrapper key={category}>
              <S.CategoryTitle>{category}</S.CategoryTitle>
              {productList
                .filter((product) => product.category === category)
                .map((product) => (
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
            </S.CategoryWrapper>
          ))}
    </S.ScrollView>
  );
};
