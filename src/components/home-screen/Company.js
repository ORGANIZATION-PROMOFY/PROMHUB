import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getCompany } from "../../api/API";

const Company = ({ idCompany }) => {
  const [companyData, setCompanyData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCompany(idCompany);
        setCompanyData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [idCompany]);

  if (!companyData) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Или <Text>Loading...</Text> если не хотите использовать индикатор
  }

  return companyData ? (
    <View style={styles.container}>
      {/* <Image source={{ uri: companyData.photo }} style={styles.img} /> */}
      <View style={styles.text}>
        <Text style={styles.name}>{companyData.name}</Text>
        <View style={styles.address}>
          <Ionicons name="location-sharp" size={15} color={"#F5D21F"} />
          <Text style={styles.addressText}>Aleksandra Biezina iela 1-10</Text>
        </View>
      </View>
    </View>
  ) : null;
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
    fontFamily: "Roboto-Medium",
  },
  text: {
    flexDirection: "column",
  },
  adress: {
    flexDirection: "row",
    alignItems: "center",
  },
  adressText: {
    fontFamily: "Roboto-Light",
    color: "#808089",
  },
});

export default Company;
