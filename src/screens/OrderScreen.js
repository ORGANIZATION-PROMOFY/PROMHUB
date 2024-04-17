import { View, SafeAreaView, Text } from "react-native";

const OrderScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <SafeAreaView>
      <Text>{product.name}</Text>
    </SafeAreaView>
  );
};

export default OrderScreen;
