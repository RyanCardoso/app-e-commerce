// Libs
import { AxiosResponse } from "axios";

// Utils
import { handleError } from "../../utils";

// Services
import { searchAPI } from "../api";

// Types
import {
  ApiResponse,
  SearchProductsResponse,
  ProductListDTO,
} from "../../types";

const getAllProducts = (): Promise<AxiosResponse<ProductListDTO[]>> => {
  try {
    const data = searchAPI.getAllProducts();

    return data;
  } catch (error: any) {
    throw error;
  }
};

const getProductById = (id: number): Promise<AxiosResponse<ProductListDTO>> => {
  try {
    const data = searchAPI.getProductById(id);

    return data;
  } catch (error: any) {
    throw error;
  }
};

const searchProducts = async (
  query: string
): Promise<ApiResponse<SearchProductsResponse>> => {
  try {
    const response = await searchAPI.searchProducts(query);

    return { data: response.data, error: undefined };
  } catch (error: any) {
    return handleError(error);
  }
};

export const productService = {
  getAllProducts,
  getProductById,
  searchProducts,
};
