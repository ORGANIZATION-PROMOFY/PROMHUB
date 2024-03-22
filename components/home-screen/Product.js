import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const Product = ({ product }) => {
  const screenWidth = Dimensions.get("window").width;
  let productWidth = (screenWidth - 20 - 20) / 2;

  return (
    <View
      key={product.id}
      style={[
        styles.container,
        product.id % 2 === 0 ? { marginRight: 0 } : { marginRight: 20 },
        { width: productWidth },
      ]}
    >
      <Image source={{ uri: product.image }} style={styles.img} />
      <View style={styles.textBlock}>
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    marginRight: 20,
    height: 200,
    borderRadius: 11,
    overflow: "hidden",
  },
  img: {
    height: "50%",
    width: "100%",
    objectFit: "cover",
  },
  textBlock: {
    height: "100%",
  },
});

export default Product;
