import styled from "styled-components/native";

export const ProductDetailsWrapper = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-top-color: #e5e5e5;
  padding: 12px 16px;
`;

export const ProductDetailsTitle = styled.Text`
  color: #0f1111;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ProductDetailsList = styled.View`
  width: 100%;
  gap: 12px;
`;

export const ProductDetailsItem = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ProductDetailsKeys = styled.Text`
  width: 140px;
  color: #565959;
  font-size: 16px;
`;

export const ProductDetailsValues = styled.Text`
  flex: 1;
  color: #0f1111;
  font-size: 16px;
`;
