import { ReactNode } from "react";
import { ProductListDTO } from "../index";

type CarItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export interface AppContextProps {
  searchProduct: ProductListDTO[] | null;
  favoriteItems: ProductListDTO[] | null;
  cartItems: CarItem[];
  loadingSearch: boolean;
  addToSearchList: (item: ProductListDTO[] | null) => void;
  addToFavorites: (item: ProductListDTO) => void;
  addToCart: (item: CarItem) => void;
  handleLoadingSearch: (isLoading: boolean) => void;
}

export interface AppProviderProps {
  children: ReactNode;
}
