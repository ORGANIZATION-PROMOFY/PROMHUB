import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import SearchBar from "../home-screen/SearchBar";
import SearchResult from "../home-screen/SearchResult";

const HomeScreen = () => {
  const [query, setQuery] = useState("");

  const onSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <SafeAreaView style={[styles.container, { marginTop: query ? 0 : 230 }]}>
      {query ? null : <Text style={styles.header}>PROMHUB</Text>}
      <SearchBar onSearch={onSearch} />
      <SearchResult query={query} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  header: {
    marginHorizontal: "auto",
    marginBottom: 80,
    color: "#F5D21F",
    fontSize: 50,
    fontFamily: "Quicksand-SemiBold",
  },
});

export default HomeScreen;
