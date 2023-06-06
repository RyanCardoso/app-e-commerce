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

export const handleError = (error: any) => {
  const errorMessage =
    error.response?.data?.message || error.message || "Request failed";

  return { data: undefined, error: errorMessage };
};
