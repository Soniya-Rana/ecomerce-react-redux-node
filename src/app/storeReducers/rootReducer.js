import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducers";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  user: userReducer,
});
