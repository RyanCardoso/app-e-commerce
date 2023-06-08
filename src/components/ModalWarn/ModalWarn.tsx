// Libs
import React from "react";
import { Modal, Text } from "react-native";

// Style
import * as S from "./styles";

interface ModalProps {
  visible: boolean;
  title: string;
  onPressCancel: () => void;
  onPressConfirm: () => void;
}

export const ModalWarn = ({
  visible,
  title,
  onPressCancel,
  onPressConfirm,
}: ModalProps) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <S.ModalWrapper>
        <S.ModalContent>
          <Text>{title}</Text>

          <S.ModalActionWrapper>
            <S.ModalAction onPress={onPressCancel}>
              <Text>Cancelar</Text>
            </S.ModalAction>

            <S.ModalAction onPress={onPressConfirm}>
              <Text>Confirmar</Text>
            </S.ModalAction>
          </S.ModalActionWrapper>
        </S.ModalContent>
      </S.ModalWrapper>
    </Modal>
  );
};
