import axios, { AxiosResponse } from "axios";
import { ProductsResponse, ProductListDTO } from "../../../types";

const api = axios.create({ baseURL: "https://dummyjson.com" });

const getAllProducts = (
  skip = 0,
  limit = 10
): Promise<AxiosResponse<ProductsResponse>> => {
  return api.get(
    `/products?limit=${limit}&skip=${skip}&select=id,title,price,discountPercentage,rating,stock,brand,thumbnail,description,category`
  );
};

const getProductById = (id: number): Promise<AxiosResponse<ProductListDTO>> => {
  return api.get(`/products/${id}`);
};

const searchProducts = (
  query: string
): Promise<AxiosResponse<ProductsResponse>> => {
  return api.get(`/products/search?q=${query}`);
};

export const searchAPI = {
  getAllProducts,
  getProductById,
  searchProducts,
};
