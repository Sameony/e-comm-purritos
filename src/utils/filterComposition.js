export const ratingFunction = (state, prodList) => {
  const { rating } = state;
  return rating === ""
    ? prodList
    : prodList.filter((product) => product.rating >= rating);
};

export const pricingFunction = (state, prodList) => {
  const { maxPrice } = state;
  return prodList?.filter((product) => product.price <= maxPrice)||[];
};

export const sortprodList = (state, prodList) => {
  switch (state.sort) {
    case "PRICE_A":
      return [...prodList].sort((a, b) => Number(a.price) - Number(b.price));
    case "PRICE_D":
      return [...prodList].sort((a, b) => Number(b.price) - Number(a.price));
    case "RATING_A":
      return [...prodList].sort((a, b) => Number(a.rating) - Number(b.rating));
    case "RATING_D":
      return [...prodList].sort((a, b) => Number(b.rating) - Number(a.rating));
    default:
      return prodList;
  }
};

export const CategoryHandler = (state, prodList) => {
  const { category } = state;
  if (category.length === 0) {
    return prodList;
  } else {
    return prodList.filter((product) =>
      category.includes(product.categoryName)
    );
  }
};
