import styled from "styled-components/native";

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 16,
    flexDirection: "column",
    gap: 50,
  },
})`
  width: 100%;
`;

export const CategoryWrapper = styled.View`
  width: 100%;
  align-items: center;
  gap: 10px;
`;

export const CategoryTitle = styled.Text`
  width: 100%;
  color: #565959;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;
