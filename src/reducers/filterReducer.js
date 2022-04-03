export const filterReducer = (state, action) => {
  const defaultState = {
    sort: "",
    rating: 5,
    category: [],
    maxPrice: 25000,
  };
  switch (action.type) {
    case "RATINGS":
      return { ...state, rating: action.payload };
    // case "CATEGORY":
    //   const { category } = state;
    //   if (category.includes(action.payload)) {
    //     const updatedCategory = category.filter((t) => t !== action.payload);
    //     return { ...state, category: updatedCategory };
    //   } else {
    //     return { ...state, category: [...state.category, action.payload] };
    //   }
    case "RESET":
      return defaultState;
    case "SORT":
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};
