import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

// Authentication Param Lists
export type AppParamsList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Checkout: undefined;
};

export type AppNavProps<T extends keyof AppParamsList> = {
  navigation: StackNavigationProp<AppParamsList, T>;
  route: RouteProp<AppParamsList, T>;
};
