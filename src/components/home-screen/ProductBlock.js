import { View, ScrollView, StyleSheet } from "react-native";
import Company from "./Company";
import Product from "./Product";

const ProductBlock = ({ products, onTogle }) => {
  return (
    <View style={styles.container}>
      <Company idCompany={products[0].product.idCompany} />

      <ScrollView
        style={styles.companyContainer}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {products.map((product, productIndex) => (
          <Product
            key={productIndex}
            product={product.product}
            onTogle={() => onTogle(product.product)}
            marginRight={productIndex % 2 === 0}
            lastChild={productIndex == products.length - 1}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  companyContainer: {
    flexGrow: 0,
    flexDirection: "row",
  },
});

export default ProductBlock;
