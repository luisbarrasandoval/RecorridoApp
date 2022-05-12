import * as React from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyTheme from "./theme";
import { StatusBar } from "expo-status-bar";
import New from "./screen/New";
import HeaderSearch from "./components/HeaderSearch";
import { HeaderContextProvider } from "./contexts/HeaderContext";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      theme={useColorScheme() == "dark" ? MyTheme.dark : MyTheme.light}
    >
      <HeaderContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
            header: () => <HeaderSearch />,
          }}
        >
          <Stack.Screen name="Home" component={New} />
        </Stack.Navigator>
      </HeaderContextProvider>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default App;
