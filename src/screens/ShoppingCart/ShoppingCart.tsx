// Libs
import React, { useContext, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Toast } from "toastify-react-native";

// Context
import { AppContext } from "../../context";

// Components
import { BottomBar, CardCart, Layout, ModalWarn } from "../../components";

// Utils
import { calcTotalPrice } from "../../utils";

// Types
import { CarItem } from "../../types";

type Action = "remove" | "clear" | null;

const configMessages = {
  remove: "Deseja remover esse item?",
  clear: "Deseja limpar o carrinho?",
};

export const ShoppingCart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(AppContext);

  const [action, setAction] = useState<Action>(null);
  const [itemSelected, setItemSelected] = useState<CarItem | null>(null);

  const openModal = (item: CarItem | null, action: Action) => {
    setAction(action);
    setItemSelected(item);
  };

  const handleAddToCart = (item: CarItem) => {
    addToCart(item);
    Toast.success("Produto acrescido!");
  };

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
    Toast.success("Produto removido!");
  };

  const handleClearCart = () => openModal(null, "clear");
  
  const handleCancelModal = () => {
    setAction(null);
    setItemSelected(null);
  };

  const handleConfirmModal = () => {
    if (action === "remove") removeFromCart(Number(itemSelected?.id), true);
    else if (action === "clear") clearCart();

    handleCancelModal();
  };

  return (
    <Layout>
      <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: "#FFF" }}>
        <ScrollView contentContainerStyle={{ gap: 16, paddingTop: 16 }}>
          {!cartItems && <Text>Nenhum produto adicionado ao carrinho.</Text>}

          {cartItems?.map((item) => (
            <CardCart
              key={item.id}
              item={item}
              onAddToCart={() => handleAddToCart(item)}
              onRemoveFromCart={() => handleRemoveFromCart(item.id)}
              onDeleteCart={() => openModal(item, "remove")}
            />
          ))}
        </ScrollView>

        {cartItems && (
          <BottomBar
            priceTotal={calcTotalPrice(cartItems)}
            onPressClear={handleClearCart}
          />
        )}
      </View>

      <ModalWarn
        visible={action !== null}
        title={configMessages[action!]}
        onPressCancel={handleCancelModal}
        onPressConfirm={handleConfirmModal}
      />
    </Layout>
  );
};
