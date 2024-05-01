import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, Modal } from "react-native";
import { useProductStore } from "../components/store/productStore";
import OrderList from "../components/order-screen/OrderList";
import Map from "../components/order-screen/Map";

const OrderScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const products = useProductStore((state) => state.products);
  const hasProducts = Object.values(products).some(
    (product) => product.count > 0
  );

  return (
    <SafeAreaView>
      {modalVisible && <View style={styles.overlay} />}
      {hasProducts && (
        <OrderList
          productsData={products}
          onMapPress={() => setModalVisible(true)}
        />
      )}
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <Map onModalVisible={() => setModalVisible(!modalVisible)} />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
});

export default OrderScreen;
