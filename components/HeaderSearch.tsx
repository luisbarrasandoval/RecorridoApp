import { useTheme } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { withTiming } from "react-native-reanimated";
import useSearchAnimation, {
  HEIGHT,
  MIN_HEIGHT,
} from "../animations/useSearchAnimation";
import { Ionicons } from "@expo/vector-icons";
import Logo from "./Logo";
import Input from "./Input";

const HeaderSearch = () => {
  const { translateY, arrayStyle, opacityLogo, rStyle } = useSearchAnimation();
  const { colors } = useTheme();

  return (
    <Animated.View
      style={[
        rStyle,
        {
          backgroundColor: colors.card,
          paddingTop: 35,
        },
      ]}
    >
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <Logo style={opacityLogo} />
        <View style={styles.search}>
          <Animated.View style={[{}, arrayStyle]}>
            <TouchableOpacity
              onPress={() => {
                translateY.value = withTiming(HEIGHT);
              }}
            >
              <Ionicons name="arrow-back" size={32} color={colors.text} />
            </TouchableOpacity>
          </Animated.View>
          <Input
            value=""
            callback={(t) => {
              translateY.value = withTiming(MIN_HEIGHT);
            }}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HeaderSearch;
