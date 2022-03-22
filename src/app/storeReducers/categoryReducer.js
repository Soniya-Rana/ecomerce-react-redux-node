const initalState = {
  AllCategories: [],
  SelectedCategory: "",
};

export const categoryReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_ALL_CATEGORIES":
      return { ...state, AllCategories: action.payload };

    case "GET_SELECTED_CATEGORY":
      return { ...state, SelectedCategory: action.payload };

    default:
      return state;
  }
};
