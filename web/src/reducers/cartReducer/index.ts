import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../../constants";
import { Product } from "../../graphql/generated/graphql";
import { ActionTye } from "../../types";

export const cartReducer = (
  state: Product[] = [],
  { payload, type }: ActionTye<Product | null>
) => {
  switch (type) {
    case ADD_TO_CART:
      return (state = [...state, payload as any]);
    case REMOVE_FROM_CART:
      const index = state.findIndex((p) => p.id === (payload as any).id);
      return (state = state
        .filter((_, idx) => {
          if (idx !== index) {
            return _;
          } else {
            return null;
          }
        })
        .filter((p) => p !== null));
    case EMPTY_CART:
      return (state = []);
    default:
      return state;
  }
};
