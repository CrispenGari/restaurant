import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../../constants";
import { Product } from "../../graphql/generated/graphql";
import { ActionTye } from "../../types";

export const cartReducer = (
  state: Product[] = [],
  { payload, type }: ActionTye<any>
) => {
  switch (type) {
    case ADD_TO_CART:
      return (state = [...state, payload]);
    case REMOVE_FROM_CART:
      return (state = state.filter((p) => p.id !== payload.id));
    case EMPTY_CART:
      return (state = []);
    default:
      return state;
  }
};
