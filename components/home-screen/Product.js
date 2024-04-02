import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  Pressable,
} from "react-native";
import discountImg from "../data/discountImg.png";
import like from "../data/like.png";
import plus from "../data/plus.png";

const Product = ({ product }) => {
  const screenWidth = Dimensions.get("window").width;
  let productWidth = (screenWidth - 50) / 2;

  return (
    <View
      key={product.id}
      id="productsss"
      style={[
        styles.container,
        product.id % 2 !== 0 ? { marginRight: 0 } : { marginRight: 30 },
        { width: productWidth },
      ]}
    >
      <Image source={{ uri: product.photo }} style={styles.img} />
      <View style={styles.discountContainer}>
        <Image source={discountImg} style={styles.discountImg} />
        <Text style={styles.discount}>{product.discount}%</Text>
      </View>

      <View style={styles.textBlock}>
        <View style={styles.nameBlock}>
          <Text style={styles.name}>{product.name}</Text>
        </View>
        <View style={styles.priceBlock}>
          <Text style={styles.price}>
            {(product.price - (product.price / 100) * product.discount).toFixed(
              2
            )}
            €
          </Text>
          <Text style={styles.prevPrice}>{product.price}€</Text>
        </View>
      </View>
      <View style={styles.btnBlock}>
        <Pressable>
          <Image source={like} style={{ width: 28, height: 28 }} />
        </Pressable>
        <Pressable>
          <Image source={plus} style={{ width: 28, height: 28 }} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#FAFAFA",
    borderRadius: 8,
  },
  img: {
    height: "50%",
    width: "100%",
    borderRadius: 8,
    // resizeMode: 'contain',
  },
  textBlock: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  nameBlock: {
    marginBottom: 5,
  },
  discountContainer: {
    position: "absolute",
    top: 2,
    left: 3,
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  discount: {
    fontWeight: "bold",
    color: "white",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
  },
  discountImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  priceBlock: {
    flexDirection: "row",
    justifyContent: "center",
  },
  price: {
    color: "#F5D21F",
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
  },
  prevPrice: {
    textDecorationLine: "line-through",
    color: "grey",
    fontSize: 13,
    fontFamily: "Montserrat-Medium",
  },
  name: {
    fontFamily: "EuclidCircularB-Regular",
    fontSize: 17,
  },
  btnBlock: {
    height: "20%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default Product;
