import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// --- Main screens ---
const HomeScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>HomeScreen</Text>
  </View>
)

const FeedScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>FeedScreen</Text>
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
  <Tab.Navigator>
    <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
    <Tab.Screen name='Feed' component={FeedScreen} options={{ headerShown: false }} />
    <Tab.Screen name='Catalog' component={CatalogScreen} options={{ headerShown: false }} />
    <Tab.Screen name='Account' component={AccountScreen} options={{ headerShown: false }} />
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