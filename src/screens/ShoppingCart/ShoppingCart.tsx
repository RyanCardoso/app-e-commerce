// Libs
import React, { useContext } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

// Context
import { AppContext } from "../../context";

// Components
import { Layout } from "../../components";

// Utils
import { formatPrice } from "../../utils";

export const ShoppingCart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(AppContext);

  return (
    <Layout>
      <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: "#FFF" }}>
        <ScrollView contentContainerStyle={{ gap: 16, paddingTop: 16 }}>
          {!cartItems && <Text>Nenhum produto adicionado ao carrinho.</Text>}

          {cartItems?.map((item) => (
            <View
              key={item?.id}
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#f5f5f5",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <View>
                <Image
                  source={{ uri: item?.thumbnail }}
                  style={{ width: 100, height: 100 }}
                />
              </View>

              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <View>
                  <Text>{item?.title}</Text>
                  <Text>{formatPrice(item?.price)}</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 1,
                      borderRadius: 5,
                      overflow: "hidden",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => removeFromCart(item?.id)}
                      style={{
                        paddingVertical: 5,
                        paddingHorizontal: 15,
                        backgroundColor: "#D5D9D9",
                      }}
                    >
                      <Text>-</Text>
                    </TouchableOpacity>

                    <Text style={{ width: 50, textAlign: "center" }}>
                      {item?.quantity}
                    </Text>

                    <TouchableOpacity
                      onPress={() => addToCart(item)}
                      style={{
                        paddingVertical: 5,
                        paddingHorizontal: 15,
                        backgroundColor: "#D5D9D9",
                      }}
                    >
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    onPress={() => removeFromCart(item?.id, true)}
                    style={{
                      marginLeft: 10,
                      borderWidth: 1,
                      borderRadius: 5,
                      alignItems: "center",
                      justifyContent: "center",
                      paddingVertical: 5,
                      paddingHorizontal: 15,
                    }}
                  >
                    <Text>Excluir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
};
