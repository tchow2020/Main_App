import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { TabRoutes } from "./src/routes/Tab.routes";
import { MainNavigation } from "./src/routes";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
