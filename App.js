import MainNavigator from "./components/main/MainNavigator";
import SignIn from "./components/enter/SignIn";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

const customFonts = {
  "EuclidCircularB-SemiBold": require("./assets/fonts/EuclidCircularB/EuclidCircularB-SemiBold.ttf"),
  "EuclidCircularB-Regular": require("./assets/fonts/EuclidCircularB/EuclidCircularB-Regular.ttf"),
  "Quicksand-Regular": require("./assets/fonts/Quicksand/Quicksand-Regular.ttf"),
  "Quicksand-SemiBold": require("./assets/fonts/Quicksand/Quicksand-SemiBold.ttf"),
};

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts(customFonts);

  if (!loaded) {
    return null; // Отобразить заглушку или спиннер загрузки, пока шрифты загружаются
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='SignIn' component={SignIn} /> */}
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
