// Libs
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { Home, Product } from "./src/screens";

// Context
import { AppProvider } from "./src/context";

// Types
import { RootStackParamList } from "./src/types";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
