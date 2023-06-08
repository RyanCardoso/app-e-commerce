import styled from "styled-components/native";

export const ProductWrapper = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ProductScroll = styled.ScrollView`
  flex-grow: 1;
`;

export const ProductHeader = styled.View`
  width: 100%;
  padding: 0 16px 10px;
`;

export const ProductHeaderContetent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductTitle = styled.Text`
  font-size: 23px;
  font-weight: bold;
`;

export const ButtonFavorite = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: 0;
`;
