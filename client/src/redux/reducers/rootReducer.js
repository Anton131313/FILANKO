import { combineReducers } from "redux";
import domainReducer from "./domainReducer";
import accountReducer from "./accountReducer";
import commentReducer from "./commentReducer";


const rootReducer = combineReducers({
  account: accountReducer,
  comment: commentReducer,
  domains: domainReducer
})

export default rootReducer;
