import React, { createContext, useState } from "react";
import { AppContextProps, AppProviderProps } from "../types/context";

const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppProvider = ({ children }: AppProviderProps) => {
  const [favoriteItems, setFavoriteItems] = useState<any[]>([]);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToFavorites = (item: any) => {
    setFavoriteItems([...favoriteItems, item]);
  };

  const addToCart = (item: any) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <AppContext.Provider
      value={{
        favoriteItems,
        cartItems,
        addToFavorites,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
