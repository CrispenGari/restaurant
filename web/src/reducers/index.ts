import { combineReducers, legacy_createStore, Store } from "redux";
import { ActionTye, StateType } from "../types";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";

export const store: Store<StateType, ActionTye<any>> = legacy_createStore(
  combineReducers({
    user: userReducer,
    cart: cartReducer,
  })
);
