import Axios from "axios";

export const fetchAllCategories = () => async (dispatch, getState) => {
  const response = await Axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  console.log(response.data);
  dispatch({
    type: "GET_ALL_CATEGORIES",
    payload: response.data,
  });
};
