const intialState = {
  AllProducts: [],
  SelectedProduct: "",
};

export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return { ...state, AllProducts: action.payload };

    case "GET_SELECTED_PRODUCT":
      return { ...state, SelectedProduct: action.payload };

    default:
      return state;
  }
};
