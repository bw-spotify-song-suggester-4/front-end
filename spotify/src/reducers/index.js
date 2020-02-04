import { combineReducers } from "redux";
// Import all reducer files here
import { loginReducer } from "./loginReducer";
import { favoriteReducer } from "./favoriteReducer"


const allReducers = combineReducers({
  loginState: loginReducer
  
});

export default allReducers;
