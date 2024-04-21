import { View, SafeAreaView, Text } from "react-native";
import { useProductStore } from "../store/productStore";

const OrderScreen = () => {
  const products = useProductStore((state) => state.products);

  return (
    <SafeAreaView>
      {products.map((product) => (
        <View key={product.id}>
          <Text>{product.name}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default OrderScreen;
