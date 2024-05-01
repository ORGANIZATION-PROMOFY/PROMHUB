import { View, ScrollView, StyleSheet, Pressable, Text } from "react-native";
import Company from "./Company";
import Product from "./Product";
import { Ionicons } from "@expo/vector-icons";

const ProductBlock = ({ products, onMapPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.companyBlock}>
        <Company
          idCompany={products[0].idCompany}
          idShop={products[0].idShop}
        />
        <Pressable style={styles.openMapsBtn} onPress={onMapPress}>
          <Text>Open in maps</Text>
        </Pressable>
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
  companyBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  productBlock: {
    flexGrow: 0,
    flexDirection: "row",
  },
  openMapsBtn: {
    backgroundColor: "grey",
    height: 20,
  },
});

export default ProductBlock;
