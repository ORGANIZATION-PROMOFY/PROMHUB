import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { useProductStore } from "../store/productStore";
import OrderList from "../components/order-screen/OrderList";

const OrderScreen = () => {
  const products = useProductStore((state) => state.products);
  const hasProducts = Object.values(products).some(
    (product) => product.count > 0
  );

  return (
    <SafeAreaView>
      {hasProducts && <OrderList productsData={products} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
  },
});

export default OrderScreen;
