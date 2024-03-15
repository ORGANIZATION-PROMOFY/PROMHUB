import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSingIn = () => {
    if (email == "gmail@gmail.com" && password == "123") {
      navigation.navigate("Main");
    } else {
      alert("Wrong");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.form}>
      <Input
        label="Email"
        value={email}
        placeholder="Type your email"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        label="Password"
        value={password}
        placeholder="Type your password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Pressable onPress={handleSingIn} style={styles.btn}>
        <Text style={{ padding: 8, fontSize: 18 }}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
};

export const Input = (props) => {
  const {
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    onSubmitEditing,
  } = props;
  return (
    <View style={{ width: "100%" }}>
      <Text style={{ padding: 8, fontSize: 18 }}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.input}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 16,
  },
  input: {
    borderRadius: 4,
    padding: 8,
    fontSize: 18,
    borderWidth: 1,
  },
  btn: {
    borderRadius: 4,
    backgroundColor: "#9370DB",
    marginTop: 20,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});

export default SignIn;
