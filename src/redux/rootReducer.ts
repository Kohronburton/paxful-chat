import { combineReducers } from "redux";
import tradesReducer from "./trades/tradesReducer";

const rootReducer = combineReducers({
  trades: tradesReducer,
});

export default rootReducer;
