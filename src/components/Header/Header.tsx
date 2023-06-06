// Libs
import React, { useContext, useState } from "react";
import { StatusBar } from "react-native";
import { Toast } from "toastify-react-native";

// Context
import { AppContext } from "../../context";

// Services
import { productService } from "../../services";

// Components
import { Input } from "../Input";

// Style
import * as S from "./styles";

const LOGO_IMAGE =
  "https://cdn2.trampos.co/companies/logos/494357/4c9fccf77a5996ef4f763f6496d66c17176f912f/original/logo_visie_sem_texto.png";

export const Header = () => {
  const { cartItems, loadingSearch, addToSearchList, handleLoadingSearch } =
    useContext(AppContext);
  const [searchValue, setSearchValue] = useState<string>("");

  const { searchProducts } = productService;

  const handleChangeSearch = (value: string) => {
    if (!value) addToSearchList(null);

    setSearchValue(value);
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
        <S.LogoWrapper>
          <S.LogoImg source={{ uri: LOGO_IMAGE }} />
          <S.LogoTitle>Visie</S.LogoTitle>
        </S.LogoWrapper>

        <S.CartWrapper>
          {/* Add Cart Icon */}
          <S.CartBadge>
            <S.CartCount>{cartItems.length}</S.CartCount>
          </S.CartBadge>
        </S.CartWrapper>
      </S.HeaderContent>

      <Input
        placeholder="Pesquisar produtos"
        onChangeText={handleChangeSearch}
        onSubmitEditing={handleConfirmSearch}
        isLoading={loadingSearch}
        value={searchValue}
      />
    </S.HeaderWrapper>
  );
};
