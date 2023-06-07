import { ReactNode } from "react";
import { ProductListDTO } from "../index";

export type CarItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity?: number;
};

export interface AppContextProps {
  searchProduct: ProductListDTO[] | null;
  favoriteItems: ProductListDTO[] | null;
  cartItems: CarItem[] | null;
  loadingSearch: boolean;
  addToSearchList: (item: ProductListDTO[] | null) => void;
  addToFavorites: (item: ProductListDTO) => void;
  addToCart: (item: CarItem) => void;
  removeFromCart: (id: number | string, all?: boolean) => void;
  clearCart: () => void;
  handleLoadingSearch: (isLoading: boolean) => void;
}

export interface AppProviderProps {
  children: ReactNode;
}
