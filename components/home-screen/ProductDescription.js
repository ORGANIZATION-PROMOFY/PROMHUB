import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Product = ({ onModalVisible, productData }) => {
  console.log(productData);

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Pressable style={styles.closeBtn} onPress={onModalVisible}>
          <Ionicons name="close" size={36} color={"black"} />
        </Pressable>
        <Image source={{ uri: productData.photo }} style={styles.img} />
        <View style={styles.contentBlock}>
          <View style={styles.textBlock}>
            <Text style={styles.name}>{productData.name}</Text>
            <View style={styles.priceBlock}>
              <Text style={styles.price}>
                {(
                  productData.price -
                  (productData.price / 100) * productData.discount
                ).toFixed(2)}
                €
              </Text>
              <Text style={styles.prevPrice}>{productData.price}€</Text>
            </View>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    height: "60%",
    backgroundColor: "white",
    borderRadius: 8,
  },
  contentBlock: {
    paddingHorizontal: 35,
    alignItems: "center",
  },
  textBlock: { alignItems: "center" },
  name: {
    fontSize: 35,
    fontFamily: "Roboto-Medium",
    marginBottom: 15,
  },
  priceBlock: {
    flexDirection: "row",
    paddingLeft: 91 - 91 / 2,
  },
  price: {
    color: "#F5D21F",
    fontFamily: "Montserrat-Medium",
    fontSize: 25,
    marginRight: 5,
  },
  prevPrice: {
    textDecorationLine: "line-through",
    color: "grey",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
  },
  closeBtn: {
    position: "absolute",
    height: 45,
    width: 45,
    backgroundColor: "#F2F2F2",
    borderRadius: 13,
    right: 15,
    top: 15,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  img: {
    height: "40%",
    width: "100%",
    borderRadius: 8,
    resizeMode: "contain",
  },
});

export default Product;
