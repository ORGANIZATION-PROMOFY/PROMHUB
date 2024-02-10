import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// --- Main screens ---
const HomeScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>HomeScreen</Text>
  </View>
)

const CatalogScreen = () =>(
  <View style={styles.layout}>
    <Text style={styles.title}>CatalogScreen</Text>
  </View>
)

const AccountScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>AccountScreen</Text>
  </View>
)

const MainNavigator = () => (
  <Tab.Navigator screenOptions={{
    tabBarStyle: {
      position: 'absolute',
      bottom: 20,
      left: 10,
      right: 10,
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      paddingBottom: -30,
    },
    tabBarShowLabel: false,
  }}
  >
    <Tab.Screen name='Home' component={HomeScreen} options={{ 
      headerShown: false, 
      tabBarIcon: () => (
        <Ionicons name="home" size={25} color={'#9370DB'}/>
      ),
    }} />
    <Tab.Screen name='Catalog' component={CatalogScreen} options={{ 
      headerShown: false, 
      tabBarIcon: () => (
        <Ionicons name="search" size={25} color={'#9370DB'}/>
      ),
    }} />
    <Tab.Screen name='Account' component={AccountScreen} options={{ 
      headerShown: false, 
      tabBarIcon: () => (
        <Ionicons name="person" size={25} color={'#9370DB'}/>
      ),
    }} />
  </Tab.Navigator>
)

export default MainNavigator;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});