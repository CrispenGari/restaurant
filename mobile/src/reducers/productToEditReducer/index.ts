import { SET_PRODUCT_TO_EDIT } from "../../constants";
import { Product } from "../../graphql/generated/graphql";
import { ActionType } from "../../types";

export const productToEditReducer = (
  state: Product | null = null,
  { payload, type }: ActionType<Product | null>
) => {
  switch (type) {
    case SET_PRODUCT_TO_EDIT:
      return (state = payload);
    default:
      return state;
  }
};
