import { useState, useEffect, useRef } from "react";
import { View, ScrollView, StyleSheet, Animated } from "react-native";
import ProductBlock from "./ProductBlock";

const SearchResult = ({ query, onTogle }) => {
  const url = "192.168.1.18";

  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://${url}:5275/api/CombinedDataCompanyDistributorProductTables`
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

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: query ? 1 : 0, // Целевое значение прозрачности
      duration: 500, // Продолжительность анимации
      useNativeDriver: true, // Использовать нативный драйвер для лучшей производительности
    }).start();
  }, [query, fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {query && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredData.map((chunk, index) => (
            <ProductBlock key={index} products={chunk} onTogle={onTogle} />
          ))}
        </ScrollView>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

export default SearchResult;
