import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../../constants";
import { ActionType, ProductType } from "../../types";

export const cartReducer = (
  state: Array<ProductType> = [],
  { payload, type }: ActionType<ProductType>
) => {
  switch (type) {
    case ADD_TO_CART:
      return (state = [...state, payload]);
    case EMPTY_CART:
      return (state = []);
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
    default:
      return state;
  }
};
