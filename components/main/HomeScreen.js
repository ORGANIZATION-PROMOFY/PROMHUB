import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import SearchBar from "../home-screen/SearchBar";
import SearchResult from "../home-screen/SearchResult";

const HomeScreen = () => {
  const [query, setQuery] = useState("");

  const onSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={onSearch} />
      <SearchResult query={query} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export default HomeScreen;
