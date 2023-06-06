import styled from "styled-components/native";

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
})`
  width: 100%;
`;
