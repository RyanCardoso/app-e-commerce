import styled from "styled-components/native";

export const CardWrapper = styled.View`
  flex: 1;
  flex-direction: row;

  border-width: 1px;
  border-color: #f5f5f5;
  border-radius: 4px;

  overflow: hidden;
  margin-bottom: 10px;
`;

export const CardImageWrapper = styled.View`
  width: 50%;
  max-width: 200px;
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const CardFavoriteWrapper = styled.TouchableOpacity`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 10px;
  right: 10px;

  z-index: 10;
  border-radius: 50px;
  background-color: hsla(0, 0%, 100%, 0.9);
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 8px;
`;

export const CardName = styled.Text`
  font-size: 16px;
`;

export const CardBrand = styled.Text`
  font-size: 12px;
  color: #565959;
`;

export const CardDiscountPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const CardPrice = styled.Text`
  font-size: 14px;
  color: #565959;
`;

export const CardPromotion = styled.Text`
  font-size: 14px;
  color: #ff0000;
`;

export const CardActionsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
`;

export const CardActionCart = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  background-color: rgb(239, 108, 0);
`;

export const CardActionDetails = styled.TouchableOpacity``;
