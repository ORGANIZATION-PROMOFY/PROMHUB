import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Company = ({ company }) => {
  console.log("company", company);

  return (
    <View style={styles.container}>
      <Image source={{ uri: company.photo }} style={styles.img} />
      <View style={styles.text}>
        <Text style={styles.name}>{company.name}</Text>
        <View style={styles.adress}>
          <Ionicons name="location-sharp" size={15} color={"#F5D21F"} />
          <Text>Aleksandra Biezina iela 1-10</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    height: 50,
    width: 50,
    resizeMode: "stretch",
    borderRadius: 5,
    marginRight: 10,
  },
  name: {
    fontFamily: "EuclidCircularB-SemiBold",
  },
  text: {
    flexDirection: "column",
  },
  adress: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "EuclidCircularB-Regular",
  },
});

export default Company;
