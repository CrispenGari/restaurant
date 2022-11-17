import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppParamsList } from "../params";
import {
  Checkout,
  DeleteProduct,
  EditProduct,
  Home,
  Login,
  Register,
} from "../screens";
import { Header } from "../components";
const Stack = createStackNavigator<AppParamsList>();
const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <Header props={props} />,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="EditProduct" component={EditProduct} />
      <Stack.Screen name="DeleteProduct" component={DeleteProduct} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
