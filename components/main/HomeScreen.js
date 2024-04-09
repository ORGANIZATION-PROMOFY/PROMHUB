import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Modal,
  Animated,
  Pressable,
} from "react-native";
import SearchBar from "../home-screen/SearchBar";
import SearchResult from "../home-screen/SearchResult";
import ProductDescription from "../home-screen/ProductDescription";

const HomeScreen = () => {
  const [query, setQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [productData, setProductData] = useState([]);

  const paddingTopAnim = useRef(new Animated.Value(230)).current; // Используем useRef для сохранения значения между рендерами
  useEffect(() => {
    Animated.timing(paddingTopAnim, {
      toValue: query ? 0 : 230,
      duration: 500,
      useNativeDriver: false, // 'paddingTop' не может быть анимирован с использованием нативного драйвера
    }).start();
  }, [query, paddingTopAnim]); // Запуск анимации при изменении query

  const onSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const onProductSelect = (product) => {
    setProductData(product);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ marginTop: paddingTopAnim }}>
        {modalVisible && <View style={styles.overlay} />}
        <View style={styles.center}>
          {query ? null : <Text style={styles.header}>PROMHUB</Text>}
          <SearchBar onSearch={onSearch} />
        </View>
        <SearchResult query={query} onTogle={onProductSelect} />
        <Modal animationType="slide" visible={modalVisible} transparent={true}>
          <ProductDescription
            product={productData}
            onModalVisible={() => setModalVisible(!modalVisible)}
          />
        </Modal>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    alignItems: "center",
  },
  header: {
    marginBottom: 80,
    color: "#F5D21F",
    fontSize: 50,
    fontFamily: "Quicksand-SemiBold",
  },
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

export default HomeScreen;
