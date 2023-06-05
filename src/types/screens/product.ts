import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./index";

export type ProductScreenRouteProp = RouteProp<RootStackParamList, "Product">;

export type ProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Product"
>;

export type ProductScreenProps = {
  route: ProductScreenRouteProp;
  navigation: ProductScreenNavigationProp;
};
