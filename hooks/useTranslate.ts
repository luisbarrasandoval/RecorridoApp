import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const useTranslate = (orientation: "x" | "y", initialValue = 0) => {
  
  const translate = useSharedValue(initialValue);
  const rStyle = useAnimatedStyle(() => {
    return orientation == "x"
      ? {
          transform: [{ translateX: translate.value }],
        }
      : {
          // transform: [{ translateY: translate.value }],
          // heigh: translate.value,
        };
  });

  return {
    translate,
    rStyle,
  };
};

export default useTranslate;