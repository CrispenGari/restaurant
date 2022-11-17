import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Product } from "../graphql/generated/graphql";

// Authentication Param Lists
export type AppParamsList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Checkout: undefined;
  EditProduct: {
    product: Product;
  };
  DeleteProduct: {
    product: Product;
  };
};

export type AppNavProps<T extends keyof AppParamsList> = {
  navigation: StackNavigationProp<AppParamsList, T>;
  route: RouteProp<AppParamsList, T>;
};
