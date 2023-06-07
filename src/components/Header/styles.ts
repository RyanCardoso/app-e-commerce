import styled from "styled-components/native";

export const HeaderWrapper = styled.View`
  width: 100%;
  padding: 16px;
  background-color: #000;
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const LogoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoImg = styled.Image`
  width: 40px;
  height: 40px;
`;

export const LogoTitle = styled.Text`
  color: #f60000;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 5px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const CartWrapper = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

export const CartBadge = styled.View`
  position: absolute;
  width: 30px;
  height: 30px;
  top: -15px;
  right: -15px;

  align-items: center;
  justify-content: center;

  border-radius: 15px;
  background-color: #f6000092;
`;

export const CartCount = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;
