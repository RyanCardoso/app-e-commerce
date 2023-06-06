import { ProductListDTO } from "../product.dto";

export interface ListProductsProps {
  products: ProductListDTO[];
  searchProduct: ProductListDTO[];
  isLoading: boolean;
}
