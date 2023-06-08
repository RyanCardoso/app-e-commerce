// Libs
import React, { createContext, useState, useCallback, memo } from "react";

// Types
import {
  AppContextProps,
  AppProviderProps,
  CarItem,
  ProductListDTO,
} from "../types";

const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppProvider = memo(({ children }: AppProviderProps) => {
  const [searchProduct, setSearchProduct] = useState<ProductListDTO[] | null>(
    null
  );
  const [favoriteItems, setFavoriteItems] = useState<ProductListDTO[] | null>(
    null
  );
  const [cartItems, setCartItems] = useState<CarItem[] | null>(null);

  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);

  const addToFavorites = useCallback((item: ProductListDTO) => {
    setFavoriteItems((prevItems) =>
      prevItems ? [...prevItems, item] : [item]
    );
  }, []);

  const addToCart = useCallback((product: CarItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems?.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems?.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Number(item.quantity) + 1 }
            : item
        ) as CarItem[];
      } else {
        return prevItems
          ? [...prevItems, { ...product, quantity: 1 }]
          : [{ ...product, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback(
    (productId: string | number, all: boolean = false) => {
      setCartItems((prevItems) => {
        if (!prevItems) {
          return null;
        }

        if (all) {
          return prevItems.filter((item) => item.id !== productId);
        }

        const updatedCart = prevItems
          .map((item) => {
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
          .filter(Boolean) as CarItem[];

        if (updatedCart.length === 0) {
          return null;
        }

        return updatedCart;
      });
    },
    []
  );

  const clearCart = useCallback(() => {
    setCartItems(null);
  }, []);

  const addToSearchList = useCallback((item: ProductListDTO[] | null) => {
    setSearchProduct(item);
  }, []);

  const handleLoadingSearch = useCallback((bool: boolean) => {
    setLoadingSearch(bool);
  }, []);

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
});

export { AppContext, AppProvider };
