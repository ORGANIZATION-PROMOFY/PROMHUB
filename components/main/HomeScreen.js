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

const HomeScreen = () => {
  const [query, setQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ paddingTop: paddingTopAnim }}>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Text>Click</Text>
        </Pressable>
        <View style={styles.center}>
          {query ? null : <Text style={styles.header}>PROMHUB</Text>}
          <SearchBar onSearch={onSearch} />
        </View>
        <SearchResult query={query} />
        <Modal animationType="slide" visible={modalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Hello</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text>Back</Text>
              </Pressable>
            </View>
          </View>
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
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    height: "60%",
    backgroundColor: "grey",
    borderRadius: 8,
  },
});

export default HomeScreen;
