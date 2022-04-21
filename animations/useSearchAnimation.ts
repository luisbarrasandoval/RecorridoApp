import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import useTranslate from "../hooks/useTranslate";

const useSearchAnimation = () => {
  const { translate: translateY, rStyle } = useTranslate("y");

  const opacityLogo = useAnimatedStyle(() => {
    const o = interpolate(translateY.value, [0, -50 - 10], [1, 0]);

    return {
      opacity: o,
    };
  });

  const arrayStyle = useAnimatedStyle(() => {
    const left = interpolate(translateY.value, [0, -50 - 10], [50, 0]);
    const width = interpolate(translateY.value, [0, -50 - 10], [-0, 40]);
    return {
      left,
      width
    }
  });

  return {
    opacityLogo,
    arrayStyle,
    translateY,
    rStyle
  }
}

export default useSearchAnimation;