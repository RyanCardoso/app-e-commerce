// Libs
import React, { useContext, useState, useEffect } from "react";
import { Toast } from "toastify-react-native";

// Context
import { AppContext } from "../../context";

// Components
import {
  Layout,
  ProductBuy,
  ProductDetails,
  Rating,
  Showcase,
} from "../../components";

// Icons
import IconFavorite from "../../assets/icons/favorite.svg";

// Types
import { ProductDTO, ProductScreenProps } from "../../types";

// Styles
import * as S from "./styles";

export const Product: React.FC<ProductScreenProps> = ({ route }) => {
  const { productId } = route.params;

  const { addToFavorites } = useContext(AppContext);
  const [product, setProduct] = useState<ProductDTO>({} as ProductDTO);

  const handleAddToFavorite = () => {
    addToFavorites({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      stock: product.stock,
      discountPercentage: product.discountPercentage,
      brand: product.brand,
      rating: product.rating,
      category: product.category,
      description: product.description,
    });

    Toast.success("Produto adicionado aos favoritos!");
  };

  const getProduct = () => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then(setProduct);
  };

  useEffect(() => {
    if (productId) getProduct();
  }, [productId]);

  return (
    <Layout>
      <S.ProductWrapper>
        <S.ProductScroll contentContainerStyle={{ paddingVertical: 16 }}>
          <S.ProductHeader>
            <S.ProductHeaderContetent>
              <S.ProductTitle>{product.title}</S.ProductTitle>

              <S.ButtonFavorite onPress={handleAddToFavorite}>
                <IconFavorite
                  width={20}
                  height={20}
                  stroke="pink"
                  strokeWidth={5}
                />
              </S.ButtonFavorite>
            </S.ProductHeaderContetent>
            <Rating rating={product.rating as number} />
          </S.ProductHeader>

          <Showcase images={product.images} />

          <ProductBuy
            id={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            discountPercentage={product.discountPercentage}
            price={product.price}
            stock={product.stock}
          />

          <ProductDetails
            brand={product.brand}
            category={product.category}
            title={product.title}
            description={product.description}
          />
        </S.ProductScroll>
      </S.ProductWrapper>
    </Layout>
  );
};
