import Axios from "axios";

export const fetchAllProducts = () => async (dispatch, getState) => {
  const response = await Axios.get("https://fakestoreapi.com/products");
  console.log(response.data);
  dispatch({
    type: "GET_ALL_PRODUCTS",
    payload: response.data,
  });
};
