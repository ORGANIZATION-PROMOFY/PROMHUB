import { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import ProductBlock from "./ProductBlock";
import data from "../data/mock";

const SearchResult = ({ query }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.18:5275/api/CombinedDataCompanyDistributorProductTables",
          { timeout: 1000 }
        );
        if (!response.ok) {
          throw new Error("Empty response received");
        }
        const data = await response.json();
        if (!data) {
          throw new Error("Invalid JSON received");
        }
        setAllData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (allData && query) {
      const filteredResult = [];
      allData.forEach((chunk) => {
        const filteredChunk = chunk.filter((product) =>
          product.product.name.toLowerCase().includes(query.toLowerCase())
        );
        if (filteredChunk.length > 0) {
          filteredResult.push(filteredChunk);
        }
      });
      setFilteredData(filteredResult);
    }
  }, [query, allData]);

  return (
    <View style={styles.container}>
      {query && (
        <ScrollView>
          {filteredData.map((chunk, index) => (
            <ProductBlock key={index} products={chunk} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default SearchResult;
