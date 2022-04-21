import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import useSearchAnimation from "../animations/useSearchAnimation";

const HeaderSearch = () => {
  const { colors } = useTheme();
  const { translateY, arrayStyle, opacityLogo, rStyle } = useSearchAnimation();

  return (
    <Animated.View style={[styles.container, rStyle]}>
      <Logo style={opacityLogo} />
      <View
        style={{
          marginTop: 15,
        }}
      >
        <View style={styles.search}>
          <Animated.View style={[{}, arrayStyle]}>
            <TouchableOpacity
              onPress={() => {
                translateY.value = withTiming(0);
              }}
            >
              <Ionicons name="arrow-back" size={32} color={colors.text} />
            </TouchableOpacity>
          </Animated.View>
          <Input
            value=""
            callback={(t) => {
              translateY.value = withTiming(-50 - 10);
            }}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const NewLine = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <HeaderSearch />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 10,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },


});

export default NewLine;
