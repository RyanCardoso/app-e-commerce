import { ReactNode } from "react";
import { ProductListDTO } from "../index";

type CarItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export interface AppContextProps {
  favoriteItems: ProductListDTO[];
  cartItems: CarItem[];
  addToFavorites: (item: ProductListDTO) => void;
  addToCart: (item: CarItem) => void;
}

export interface AppProviderProps {
  children: ReactNode;
}
