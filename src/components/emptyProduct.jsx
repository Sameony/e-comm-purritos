
export const EmptyProduct = (route) => {
  function whatError(route) {
    switch (route) {
    case "PRODUCT":
      return "Uh oh... We do not possess purritos with such specifications as of now..."
    case "WISHLIST":
      return "You have not wishlisted any purritos as of now"
    case "CARTLIST":
      return "You have not Added any purritos to cart as of now"
    default:
      break;
  }}
  return (
    <h1 className="align-items-center errorHeader">
      {whatError(route)}
    </h1>
  );
};
