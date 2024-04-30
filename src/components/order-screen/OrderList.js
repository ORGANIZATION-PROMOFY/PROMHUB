import { useState, useEffect, useMemo } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import ProductBlock from "./ProductBlock";

const OrderList = ({ productsData }) => {
  const productsArray = useMemo(
    () => Object.values(productsData),
    [productsData]
  );
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const productsByCompany = {};
    productsArray.forEach((product) => {
      const { idCompany } = product;
      if (!productsByCompany[idCompany]) {
        productsByCompany[idCompany] = [];
      }
      productsByCompany[idCompany].push({ ...product });
    });
    setFilteredData(Object.values(productsByCompany));
  }, [productsArray]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {filteredData.map((chunk, index) => (
        <ProductBlock key={index} products={chunk} />
      ))}
    </ScrollView>
  );
};

export default OrderList;
