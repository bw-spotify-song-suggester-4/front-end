import { combineReducers } from "redux";
// Import all reducer files here
import { loginReducer } from "./loginReducer";
import { FavoriteReducer } from "./favoriteReducer";

const allReducers = combineReducers({
  loginState: loginReducer,
  favoriteReducer: FavoriteReducer
});

export default allReducers;
