import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";

const Company = ({ company }) => {
  console.log("company", company);

  return (
    <View style={styles.container}>
      <Text>{company.name}</Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default Company;
