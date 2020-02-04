import { combineReducers } from "redux";
// Import all reducer files here
import { loginReducer } from "./loginReducer";



const allReducers = combineReducers({
  loginState: loginReducer
});

export default allReducers;
