import axios, { AxiosResponse } from "axios";
import { ProductsResponse, ProductListDTO } from "../../../types";

const api = axios.create({ baseURL: "https://dummyjson.com" });

const getAllProducts = (): Promise<AxiosResponse<ProductsResponse>> => {
  return api.get("/products/");
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
