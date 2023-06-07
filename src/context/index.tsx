// Libs
import React, { createContext, useState } from "react";

// Types
import {
  AppContextProps,
  AppProviderProps,
  CarItem,
  ProductListDTO,
} from "../types";

const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppProvider = ({ children }: AppProviderProps) => {
  const [searchProduct, setSearchProduct] = useState<ProductListDTO[] | null>(
    null
  );
  const [favoriteItems, setFavoriteItems] = useState<ProductListDTO[] | null>(
    null
  );
  const [cartItems, setCartItems] = useState<CarItem[] | null>(null);

  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);

  const addToFavorites = (item: ProductListDTO) => {
    setFavoriteItems(favoriteItems ? [...(favoriteItems as []), item] : [item]);
  };

  const addToCart = (product: CarItem) => {
    const existingItem = cartItems?.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems?.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: Number(item.quantity) + 1 };
        }
        return item;
      }) as [];

      setCartItems(updatedCart);
    } else {
      setCartItems(
        cartItems
          ? [...cartItems, { ...product, quantity: 1 }]
          : [{ ...product, quantity: 1 }]
      );
    }
  };

  const removeFromCart = (productId: string | number, all: boolean = false) => {
    if (all) {
      const filterCart = cartItems?.filter(
        (item) => item.id !== productId
      ) as [];

      if (filterCart?.length === 0) {
        setCartItems(null);
        return;
      }

      setCartItems(filterCart);
      return;
    }

    const updatedCart = cartItems
      ?.map((item) => {
        if (item.id === productId) {
          const newQuantity = Number(item.quantity) - 1;
          if (newQuantity <= 0) {
            return null;
          } else {
            return { ...item, quantity: newQuantity };
          }
        }

        return item;
      })
      .filter(Boolean) as [];

    if (updatedCart?.length === 0) {
      setCartItems(null);
      return;
    }

    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems(null);
  };

  const addToSearchList = (item: ProductListDTO[] | null) => {
    setSearchProduct(item);
  };

  const handleLoadingSearch = (bool: boolean) => {
    setLoadingSearch(bool);
  };

  return (
    <AppContext.Provider
      value={{
        searchProduct,
        favoriteItems,
        cartItems,
        loadingSearch,
        addToSearchList,
        addToFavorites,
        addToCart,
        clearCart,
        removeFromCart,
        handleLoadingSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
