import { Product, User } from "../graphql/generated/graphql";

export interface ActionType<T> {
  payload: T;
  type: string;
}

export interface StateType {
  user: User | null;
  cart: ProductType[];
  productToDelete: Product | null;
  productToEdit: Product | null;
}

export type ProductType = {
  id: number;
  imageURL: string;
  productName: string;
  productCurrentPrice: number;
  onSpecial: boolean;
  previousPrice: number;
};
