// Libs
import React, { useContext } from "react";
import { ScrollView } from "react-native";

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

  return (
    <S.ScrollView>
      {isLoading || loadingSearch
        ? new Array(6).fill(0).map((_, index) => <CardSkeleton key={index} />)
        : (searchProduct || products)?.map((product) => (
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
    </S.ScrollView>
  );
};
