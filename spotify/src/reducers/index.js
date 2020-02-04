import { combineReducers } from "redux";
// Import all reducer files here
import { loginReducer } from "./loginReducer";
import { favoriteReducer } from "./favoriteReducer";

const allReducers = combineReducers({
  loginState: loginReducer,
  favoriteReducer: favoriteReducer
});

export default allReducers;
