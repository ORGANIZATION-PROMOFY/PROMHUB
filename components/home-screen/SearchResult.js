import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import ProductBlock from "./ProductBlock";
import data from "../data/mock";

const SearchResult = ({ query }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5275/api/CombinedDataCompanyDistributorProductTables"
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
    <ScrollView style={styles.container}>
      {filteredData.map((chunk, index) => (
        <ProductBlock key={index} products={chunk} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SearchResult;
