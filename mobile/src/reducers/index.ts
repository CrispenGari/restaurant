import { Store, legacy_createStore, combineReducers } from "redux";
import { ActionType, StateType } from "../types";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";

export const store: Store<StateType, ActionType<any>> = legacy_createStore(
  combineReducers({
    user: userReducer,
    cart: cartReducer,
  })
);
