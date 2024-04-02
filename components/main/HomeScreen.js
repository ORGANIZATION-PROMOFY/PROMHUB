import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Modal,
  Animated,
} from "react-native";
import SearchBar from "../home-screen/SearchBar";
import SearchResult from "../home-screen/SearchResult";

const HomeScreen = () => {
  const [query, setQuery] = useState("");
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
        <View style={styles.center}>
          {query ? null : <Text style={styles.header}>PROMHUB</Text>}
          <SearchBar onSearch={onSearch} />
        </View>
        <SearchResult query={query} />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
});

export default HomeScreen;
