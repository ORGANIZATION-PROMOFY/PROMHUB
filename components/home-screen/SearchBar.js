import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = () => {
    onSearch(query.trim());
  };

  return (
    <View style={styles.container} id="cont">
      <Ionicons
        name="search"
        size={25}
        color={"#F5D21F"}
        style={styles.searchIcon}
      />
      <TextInput
        style={[styles.input, focused && styles.inputFocused]}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSubmit}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Введите желаемый продукт"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginHorizontal: "auto",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    opacity: 70,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 10,
    paddingStart: 34,
    backgroundColor: "white",
    borderRadius: 8,
    fontFamily: "EuclidCircularB-Regular",
    borderColor: "transparent",

    shadowColor: "#ccc", // Optional: shadow color (default is black)
    shadowOffset: { width: 3, height: 3 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity (0 - 1)
    shadowRadius: 4, // Shadow blur radius
    elevation: 4,
  },
  inputFocused: {
    opacity: 100,
  },
  searchIcon: {
    position: "absolute",
    top: 4,
    left: 4,
    zIndex: 1,
  },
});

export default SearchBar;
