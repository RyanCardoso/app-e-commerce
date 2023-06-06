// Libs
import React, { useContext } from "react";
import { Image, Text, TextInput, StatusBar, View } from "react-native";

// Context
import { AppContext } from "../../context";

// Components
import { Input } from "../Input";

// Style
import * as S from "./styles";

const LOGO_IMAGE =
  "https://cdn2.trampos.co/companies/logos/494357/4c9fccf77a5996ef4f763f6496d66c17176f912f/original/logo_visie_sem_texto.png";

export const Header = () => {
  const { cartItems } = useContext(AppContext);

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

      <Input />
    </S.HeaderWrapper>
  );
};
