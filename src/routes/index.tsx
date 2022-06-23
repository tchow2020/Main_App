import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CadastroProps from "../screens/Cadastro";
import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./Tab.routes";
import LoginProps from "../screens/Login";
import { Products } from "../screens/Products";
import { ProductDetails } from "../screens/ProductDetails";

const Stack = createStackNavigator();

export function MainNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{ animationEnabled: true, headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginProps} />
        <Stack.Screen name="Cadastro" component={CadastroProps} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Home" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
