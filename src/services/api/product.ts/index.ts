import axios, { AxiosResponse } from "axios";
import { SearchProductsResponse, ProductListDTO } from "../../../types";

const api = axios.create({ baseURL: "https://dummyjson.com" });

const getAllProducts = (): Promise<AxiosResponse<ProductListDTO[]>> => {
  return api.get("/products/");
};

const getProductById = (id: number): Promise<AxiosResponse<ProductListDTO>> => {
  return api.get(`/products/${id}`);
};

const searchProducts = (
  query: string
): Promise<AxiosResponse<SearchProductsResponse>> => {
  return api.get(`/products/search?q=${query}`);
};

export const searchAPI = {
  getAllProducts,
  getProductById,
  searchProducts,
};
