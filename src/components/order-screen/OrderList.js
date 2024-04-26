import { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Animated,
  ActivityIndicator,
} from "react-native";
import ProductBlock from "./ProductBlock";
import { getProduct } from "../../api/API";

const SearchResult = ({ query, onTogle, navigation }) => {
  const url = "192.168.1.18";

  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (allData && query) {
      const productsByCompany = {};
      allData.forEach((product) => {
        if (product.product.name.toLowerCase().includes(query.toLowerCase())) {
          const { idCompany } = product.product;
          if (!productsByCompany[idCompany]) {
            productsByCompany[idCompany] = [];
          }
          productsByCompany[idCompany].push(product);
        }
      });
      setFilteredData(Object.values(productsByCompany));
    }
  }, [query, allData]);

  if (!filteredData) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {query && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredData.map((chunk, index) => (
            <ProductBlock
              key={index}
              products={chunk}
              onTogle={onTogle}
              navigation={navigation}
            />
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
    marginBottom: 390,
  },
});

export default SearchResult;
