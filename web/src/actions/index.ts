import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SET_USER,
} from "../constants";
import { Product, User } from "../graphql/generated/graphql";
import { ActionTye } from "../types";

export const setUser = (payload: User | null): ActionTye<User | null> => {
  return {
    payload,
    type: SET_USER,
  };
};

export const addToCart = (payload: Product) => {
  return {
    payload,
    type: ADD_TO_CART,
  };
};
export const removeFromCart = (payload: Product) => {
  return {
    payload,
    type: REMOVE_FROM_CART,
  };
};

export const emptyCart = () => {
  return {
    payload: null,
    type: EMPTY_CART,
  };
};
