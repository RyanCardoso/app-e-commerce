export const formatPrice = (price: number) => {
  return price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

export const discontCalc = (price: number, percentage: number) => {
  const discont = (price * percentage) / 100;
  return price - discont;
};
