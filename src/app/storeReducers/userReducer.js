const intialState = {
  firstName: "",
  lastName: "",
  age: "",
  address: "",
  gender: "",
};

export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_USER_FNAME":
      return { ...state, firstName: action.payload };

    case "GET_USER_LNAME":
      return { ...state, lastName: action.payload };

    default:
      return state;
  }
};
