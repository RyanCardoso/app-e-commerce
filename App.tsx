// Libs
import React from "react";
import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ToastManager from "toastify-react-native";

// Screens
import { Home, Product, ShoppingCart } from "./src/screens";

// Context
import { AppProvider } from "./src/context";

// Types
import { RootStackParamList } from "./src/types";

const Stack = createStackNavigator<RootStackParamList>();

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95);

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        </Stack.Navigator>
      </AppProvider>
      <ToastManager
        duration={10000}
        width={ITEM_WIDTH}
        position="bottom"
        style={{ fontSize: 12 }}
      />
    </NavigationContainer>
  );
}
