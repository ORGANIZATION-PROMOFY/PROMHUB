import { View, ScrollView, StyleSheet } from "react-native";
import Company from "./Company";
import Product from "./Product";

const ProductBlock = ({ products, onTogle }) => {
  const productsByCompany = {};

  products.forEach((product) => {
    const companyName = product.company.name;
    if (!productsByCompany[companyName]) {
      productsByCompany[companyName] = [];
    }
    productsByCompany[companyName].push(product);
  });

  return (
    <View>
      {Object.keys(productsByCompany).map((companyName, index) => (
        <View key={index} style={styles.container}>
          <Company company={productsByCompany[companyName][0].company} />
          <ScrollView
            style={styles.companyContainer}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {productsByCompany[companyName].map((product, productIndex) => (
              <Product
                key={product.id}
                product={product.product}
                onTogle={() => onTogle(product.product)}
                marginRight={
                  productIndex % 2 === 0 && productIndex !== products.length - 1
                }
              />
            ))}
          </ScrollView>
        </View>
      ))}
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
