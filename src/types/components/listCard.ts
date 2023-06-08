import { ProductListDTO } from "../product.dto";

export interface ListProductsProps {
  products: ProductListDTO[];
  isLoading: boolean;
}
