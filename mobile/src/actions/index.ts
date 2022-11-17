import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SET_PRODUCT_TO_DELETE,
  SET_PRODUCT_TO_EDIT,
  SET_USER,
} from "../constants";
import { Product, User } from "../graphql/generated/graphql";

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

export const setUser = (payload: User | null) => {
  return {
    payload,
    type: SET_USER,
  };
};

export const setProductToDelete = (payload: Product | null) => {
  return {
    payload,
    type: SET_PRODUCT_TO_DELETE,
  };
};
export const setProductToEdit = (payload: Product | null) => {
  return {
    payload,
    type: SET_PRODUCT_TO_EDIT,
  };
};
