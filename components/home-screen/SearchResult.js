import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import ProductBlock from "./ProductBlock";
import data from "../data/mock";

const SearchResult = ({ query }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (query.trim()) {
      const filteredResult = data.filter((item) =>
        item.products.some((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      );
      setFilteredData(filteredResult);
    } else {
      setFilteredData([]); // Reset filteredData to empty if query is empty
    }
  }, [query]);

  console.log(query);
  console.log(filteredData);

  return (
    <ScrollView style={styles.container}>
      {filteredData.length > 0 &&
        filteredData.map((company) => (
          <ProductBlock key={company.id} company={company} query={query} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SearchResult;
