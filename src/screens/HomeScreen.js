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
import SearchBar from "../components/home-screen/SearchBar";
import SearchResult from "../components/home-screen/SearchResult";
import ProductDescription from "../components/home-screen/ProductDescription";

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [productData, setProductData] = useState([]);

  const paddingTopAnim = useRef(new Animated.Value(230)).current;
  useEffect(() => {
    Animated.timing(paddingTopAnim, {
      toValue: query ? 0 : 230,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [query, paddingTopAnim]);
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
        <SearchResult
          query={query}
          onTogle={onProductSelect}
          navigation={navigation}
        />
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
