import styled from "styled-components/native";

export const BannerItemWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const BannerItemImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const BannerItemDescription = styled.View`
  position: absolute;
  bottom: 50px;
  
  z-index: 1;
  padding: 0 16px;
`;

export const BannerItemText = styled.Text`
  color: #fff;
  font-size: 18px;
  background-color: #000;
  padding: 13px;
`;
