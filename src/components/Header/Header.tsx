// Libs
import React, { useContext, useState, memo } from "react";
import { StatusBar, Text } from "react-native";
import { Toast } from "toastify-react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

// Context
import { AppContext } from "../../context";

// Services
import { productService } from "../../services";

// Components
import { Input } from "../Input";

// Icons
import IconCart from "../../assets/icons/car.svg";
import IconLogo from "../../assets/icons/visie-logo.svg";

// Style
import * as S from "./styles";

interface NameScreenProps {
  onPress: () => void;
  name: string;
}

const NameScreen = ({ onPress, name }: NameScreenProps) => {
  return (
    <>
      <Text style={{ color: "#FFF" }} onPress={onPress}>
        Voltar
      </Text>
      <S.HeaderTitle>{name}</S.HeaderTitle>
    </>
  );
};

export const Header = memo(() => {
  const route = useRoute();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [searchValue, setSearchValue] = useState<string>("");
  const { cartItems, loadingSearch, addToSearchList, handleLoadingSearch } =
    useContext(AppContext);

  const { searchProducts } = productService;
  const isHome = route.name === "Home";

  const handleChangeSearch = (value: string) => {
    if (!value) addToSearchList(null);

    setSearchValue(value);
  };

  const redirectToShoppingCart = () => {
    navigation.navigate("ShoppingCart");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSearch = async () => {
    handleLoadingSearch(true);

    try {
      const response = await searchProducts(searchValue);
      const { data } = response;

      handleLoadingSearch(false);

      if (!data || data.total === 0) {
        Toast.error("Nenhum produto encontrado");
        return;
      }

      addToSearchList(data.products);
    } catch (error) {
      console.error(error);
      handleLoadingSearch(false);
    }
  };

  const handleConfirmSearch = () => {
    if (!searchValue) return;

    handleSearch();
  };

  return (
    <S.HeaderWrapper
      style={{ paddingTop: Number(StatusBar.currentHeight) + 16 }}
    >
      <StatusBar backgroundColor="transparent" translucent />

      <S.HeaderContent>
        {isHome && (
          <S.LogoWrapper>
            <IconLogo width={100} />
          </S.LogoWrapper>
        )}

        {!isHome && <NameScreen onPress={handleGoBack} name={route.name} />}

        <S.CartWrapper onPress={redirectToShoppingCart}>
          <IconCart width={32} height={32} color="#FFF" fill="#FFF" />
          <S.CartBadge>
            <S.CartCount>{cartItems?.length}</S.CartCount>
          </S.CartBadge>
        </S.CartWrapper>
      </S.HeaderContent>

      {isHome && (
        <Input
          placeholder="Pesquisar produtos"
          onChangeText={handleChangeSearch}
          onSubmitEditing={handleConfirmSearch}
          isLoading={loadingSearch}
          value={searchValue}
        />
      )}
    </S.HeaderWrapper>
  );
});
