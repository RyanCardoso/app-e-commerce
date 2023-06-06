// Libs
import React, { createContext, useState } from "react";

// Types
import { AppContextProps, AppProviderProps, ProductListDTO } from "../types";

const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppProvider = ({ children }: AppProviderProps) => {
  const [searchProduct, setSearchProduct] = useState<ProductListDTO[] | null>(
    null
  );
  const [favoriteItems, setFavoriteItems] = useState<ProductListDTO[] | null>(
    null
  );
  const [cartItems, setCartItems] = useState<any[]>([]);

  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);

  const addToFavorites = (item: ProductListDTO) => {
    setFavoriteItems([...(favoriteItems as []), item]);
  };

  const addToCart = (item: any) => {
    setCartItems([...cartItems, item]);
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
        handleLoadingSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
