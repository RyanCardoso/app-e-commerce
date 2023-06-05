import styled, { css } from "styled-components/native";

export const ButtonWrapper = styled.TouchableOpacity<any>`
  ${({ backgroundColor, color }) => css`
    width: 100%;
    align-items: center;
    padding: 16px 8px;
    border-radius: 32px;
    background-color: ${backgroundColor || "rgb(239, 108, 0)"};
  `}
`;

export const ButtonLabel = styled.Text`
  color: #0F1111;
`;
