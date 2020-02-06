import { combineReducers } from "redux";
// Import all reducer files here
import { loginReducer } from "./loginReducer";
import { favoriteReducer } from "./favoriteReducer";
import { songReducer } from "./songReducer"
 
const allReducers = combineReducers({
  loginReducer: loginReducer,
  favoriteReducer: favoriteReducer,
  songReducer: songReducer

});

export default allReducers;
