import styled from "styled-components/native";

export const HomeWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexDirection: "column",
    gap: 50,
  },
})`
  flex: 1;
  width: 100%;
`;
