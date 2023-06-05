// Libs
import React from "react";

// Style
import * as S from "./styles";

interface ProductDetailsProps {
  brand: string;
  category: string;
  title: string;
  description: string;
}

export const ProductDetails = ({
  brand,
  category,
  title,
  description,
}: ProductDetailsProps) => {
  return (
    <S.ProductDetailsWrapper>
      <S.ProductDetailsTitle>Detalhes</S.ProductDetailsTitle>
      <S.ProductDetailsList>
        <S.ProductDetailsItem>
          <S.ProductDetailsKeys>Marca</S.ProductDetailsKeys>
          <S.ProductDetailsValues>{brand}</S.ProductDetailsValues>
        </S.ProductDetailsItem>

        <S.ProductDetailsItem>
          <S.ProductDetailsKeys>Categoria</S.ProductDetailsKeys>
          <S.ProductDetailsValues>{category}</S.ProductDetailsValues>
        </S.ProductDetailsItem>

        <S.ProductDetailsItem>
          <S.ProductDetailsKeys>Nome</S.ProductDetailsKeys>
          <S.ProductDetailsValues>{title}</S.ProductDetailsValues>
        </S.ProductDetailsItem>

        <S.ProductDetailsItem>
          <S.ProductDetailsKeys>Descrição</S.ProductDetailsKeys>
          <S.ProductDetailsValues>{description}</S.ProductDetailsValues>
        </S.ProductDetailsItem>
      </S.ProductDetailsList>
    </S.ProductDetailsWrapper>
  );
};
