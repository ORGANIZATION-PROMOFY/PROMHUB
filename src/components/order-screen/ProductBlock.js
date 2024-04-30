import { View, ScrollView, StyleSheet } from "react-native";
import Company from "./Company";
import Product from "./Product";

const ProductBlock = ({ products }) => {
  return (
    <View style={styles.container}>
      <View style={styles.companyBlock}>
        <Company
          idCompany={products[0].idCompany}
          idShop={products[0].idShop}
        />
      </View>
      <ScrollView style={styles.productBlock}>
        {products.map((product) => (
          <Product key={product.idProduct} product={product} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  companyBlock: {},
  productBlock: {
    flexGrow: 0,
    flexDirection: "row",
  },
});

export default ProductBlock;
