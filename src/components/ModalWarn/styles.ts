import styled from "styled-components/native";

export const ModalWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

export const ModalContent = styled.View`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
`;

export const ModalActionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

export const ModalAction = styled.TouchableOpacity`
  padding: 10px;
  background-color: #d5d9d9;
  border-radius: 5px;
`;
