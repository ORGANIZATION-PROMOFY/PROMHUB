import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const Product = ({ product }) => {
  const screenWidth = Dimensions.get("window").width;
  let productWidth = (screenWidth - 80) / 2;

  return (
    <View
      key={product.id}
      style={[
        styles.container,
        product.id % 2 === 0 ? { marginRight: 0 } : { marginRight: 20 },
        { width: productWidth },
      ]}
    >
      <Image source={{ uri: product.photo }} style={styles.img} />
      <Text style={styles.discount}>-{product.discount}%</Text>

      <View style={styles.textBlock}>
        <Text style={styles.price}>
          {product.price - (product.price / 100) * product.discount}€
        </Text>
        <Text style={styles.prevPrice}>{product.price}€</Text>
        <Text style={styles.name}>{product.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    height: 200,
    overflow: "hidden",
  },
  img: {
    height: "70%",
    width: "100%",
    borderRadius: 8,
    // resizeMode: ,
  },
  textBlock: {
    height: "100%",
  },
  discount: {
    position: "absolute",
    top: 2,
    left: 3,
    backgroundColor: "#EB4757",
    fontWeight: "bold",
    color: "white",
    fontSize: 12,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  price: {
    color: "#EB4757",
    fontFamily: "EuclidCircularB-SemiBold",
  },
  prevPrice: {
    textDecorationLine: "line-through",
    color: "grey",
    fontSize: 13,
    fontFamily: "EuclidCircularB-SemiBold",
  },
  name: {
    fontFamily: "EuclidCircularB-Regular",
  },
});

export default Product;
