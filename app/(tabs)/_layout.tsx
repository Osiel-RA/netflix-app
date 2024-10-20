// app/_layout.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";

import LoginScreen from "./LoginScreen";

const Stack = createNativeStackNavigator();

const AppLayout = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />

      {/* más pantallas aquí */}
    </Stack.Navigator>
  );
};

export default AppLayout;
