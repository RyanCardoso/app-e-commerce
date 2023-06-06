import styled from "styled-components/native";
import { TextInput as Input } from "react-native";

export const InputWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

  border-radius: 8px;
  background-color: white;
  padding: 0 16px;

  overflow: hidden;
`;

export const TextInput = styled(Input)`
  flex: 1;
  background-color: white;
  padding: 8px 0;
`;
