import { Product, User } from "../graphql/generated/graphql";

export interface ActionTye<T> {
  payload: T;
  type: string;
}

export interface StateType {
  user: User | null;
  cart: Product[];
}
