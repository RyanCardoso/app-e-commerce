// Libs
import React, { useContext } from "react";

// Context
import { AppContext } from "../../context";

// Components
import { Card, CardSkeleton } from "../Card";
import { Skeleton } from "../Skeleton";

// Types
import { ListProductsProps } from "../../types";

// Styles
import * as S from "./styles";

export const ListProducts = ({ products, isLoading }: ListProductsProps) => {
  const { loadingSearch, searchProduct } = useContext(AppContext);

  const productList = searchProduct || products;

  const getUniqueCategories = (): string[] => {
    const categories = productList.map((product) => product.category);
    return [...new Set(categories)];
  };

  return (
    <S.ListProductsWrapper>
      {!productList || isLoading || loadingSearch ? (
        <S.CategoryWrapper>
          <S.CategoryTitle style={{ width: "100%" }}>
            <Skeleton width={300} height={30} />
          </S.CategoryTitle>
          {new Array(6).fill(0).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </S.CategoryWrapper>
      ) : (
        getUniqueCategories()?.map((category) => (
          <S.CategoryWrapper key={category}>
            <S.CategoryTitle>{category}</S.CategoryTitle>
            {productList
              .filter((product) => product.category === category)
              .map((product) => (
                <Card key={product.id} product={product} />
              ))}
          </S.CategoryWrapper>
        ))
      )}
    </S.ListProductsWrapper>
  );
};
