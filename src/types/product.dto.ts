export type ProductDTO = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductListDTO = Omit<ProductDTO, "description" | "images">;

export interface ProductsResponse {
  products: ProductListDTO[];
  total: number;
  skip: number;
  limit: number;
}

export interface ApiResponse<DataType> {
  data?: DataType;
  error?: string;
}
