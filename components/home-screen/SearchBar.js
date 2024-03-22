import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    onSearch(query.trim());
  };

  return (
    <View style={styles.container} id="cont">
      <Ionicons
        name="search"
        size={25}
        color={"#9370DB"}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSubmit}
        placeholder="Введите желаемый продукт"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 8,
    paddingBottom: 8,
    paddingStart: 34,
    backgroundColor: "white",
    borderRadius: 8,

    shadowColor: "#ccc", // Optional: shadow color (default is black)
    shadowOffset: { width: 3, height: 3 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity (0 - 1)
    shadowRadius: 4, // Shadow blur radius
    elevation: 4,
  },
  searchIcon: {
    position: "absolute",
    top: 4,
    left: 4,
    zIndex: 1,
  },
});

export default SearchBar;
