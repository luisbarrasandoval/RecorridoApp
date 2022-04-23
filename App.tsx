import * as React from "react";
import { View, Text, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyTheme from "./theme";
import SearchScreen from "./screen/SearchScreen";
import { StatusBar } from "expo-status-bar";
import New from "./screen/New";
import HeaderSearch from "./components/HeaderSearch";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      theme={useColorScheme() == "dark" ? MyTheme.dark : MyTheme.light}
    >
      <Stack.Navigator
        screenOptions={{
          header: () => <HeaderSearch />,
        }}
      >
        <Stack.Screen name="Home" component={New} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default App;
