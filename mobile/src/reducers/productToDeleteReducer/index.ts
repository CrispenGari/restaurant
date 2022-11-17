import { SET_PRODUCT_TO_DELETE } from "../../constants";
import { Product } from "../../graphql/generated/graphql";
import { ActionType } from "../../types";

export const productToDeleteReducer = (
  state: Product | null = null,
  { payload, type }: ActionType<Product | null>
) => {
  switch (type) {
    case SET_PRODUCT_TO_DELETE:
      return (state = payload);
    default:
      return state;
  }
};
