export const ratingFunction = (state, products) => {
  const { rating } = state;
  return rating === ""
    ? products
    : products.filter((product) => product.rating <= rating);
};
export const sortProducts = (state, products) => {
  switch (state.sort) {
    case "PRICE":
      return [...products].sort((a, b) => Number(a.price) - Number(b.price));
    case "RATING":
      return [...products].sort((a, b) => Number(b.rating) - Number(a.rating));
    default:
      return products;
  }
};
