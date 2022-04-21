import * as React from "react";
import { View, Text, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useTheme } from "@react-navigation/native";
import MyTheme from "./theme";
import NewLine from "./screen/NewLine";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      theme={useColorScheme() == "dark" ? MyTheme.dark : MyTheme.light}
    >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={NewLine} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default App;
