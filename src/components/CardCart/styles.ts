import styled from "styled-components/native";

export const CardCartWrapper = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-color: #f5f5f5;
  border-radius: 4px;
  overflow: hidden;
`;

export const CardCartImg = styled.Image`
  width: 100px;
  height: 100px;
`;

export const CardCartContent = styled.View`
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const CardCartAcionWrapper = styled.View`
  flex-direction: row;
`;

export const CardCartActions = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-radius: 5px;
  overflow: hidden;
`;

export const CardCartAcion = styled.TouchableOpacity`
  padding: 5px 15px;
  background-color: #D5D9D9;
`;

export const CardCartActionClear = styled.TouchableOpacity`
  margin-left: 10px;
  border-width: 1px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
`;
