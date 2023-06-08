import { CarItem } from "../types";

export const formatPrice = (price: number) => {
  return price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

export const discontCalc = (price: number, percentage: number) => {
  const discont = (price * percentage) / 100;
  return formatPrice(price - discont);
};

export const shuffleArray = (array: []) => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray.slice(0, 5);
};

export const calcTotalPrice = (products: CarItem[]) => {
  let precoGeral = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const quantidade = Number(product.quantity);
    const preco = product.price;

    const precoTotal = quantidade * preco;
    precoGeral += precoTotal;
  }

  return formatPrice(precoGeral);
};

export const calcTotalItems = (products: CarItem[]) => {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const quantidade = product.quantity;

    total += Number(quantidade);
  }

  return total;
};

export const handleError = (error: any) => {
  const errorMessage =
    error.response?.data?.message || error.message || "Request failed";

  return { data: undefined, error: errorMessage };
};
