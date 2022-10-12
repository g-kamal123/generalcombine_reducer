import { CakeReducer } from "./CakeReducer";
import { IceCreamReducer } from "./IceCreamReducer";
import { ChockoReducer } from "./ChockoReducer";
import { combineReducers } from "redux";
export const rootreducer = combineReducers({
  CakeReducer,
  IceCreamReducer,
  ChockoReducer,
});
