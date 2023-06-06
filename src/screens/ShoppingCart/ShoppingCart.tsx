// Libs
import React, { useContext } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

// Context
import { AppContext } from "../../context";

export const ShoppingCart = () => {
  const { cartItems } = useContext(AppContext);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Shopping Cart</Text>

        {cartItems.map((item) => (
          <Text key={item.id}>{item.title}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
