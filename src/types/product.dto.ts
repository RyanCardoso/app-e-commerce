export type ProductListDTO = {
  id: number;
  title: string;
  brand: string;
  rating: number;
  category: string;
  description: string;
  discountPercentage: number;
  price: number;
  thumbnail: string;
  stock: number;
};

export type ProductDTO = ProductListDTO & {
  description: string;
  images: string[];
};

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
