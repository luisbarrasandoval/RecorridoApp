import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
// import useTranslate from "../hooks/useTranslate";

const HEIGHT = 60 + 10 + 10 + 80;
const MIN_HEIGHT = 100;

const useSearchAnimation = () => {
  // const { translate: translateY, rStyle } = useTranslate("y");

  const height = useSharedValue(HEIGHT);
  const rStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const opacityLogo = useAnimatedStyle(() => {
    const o = interpolate(height.value, [HEIGHT, MIN_HEIGHT], [1, 0]);
    const h = interpolate(height.value, [MIN_HEIGHT, HEIGHT], [0, 60]);
    return {
      opacity: o,
      height: h,
    };
  });

  const arrayStyle = useAnimatedStyle(() => {
    const left = interpolate(height.value, [HEIGHT, MIN_HEIGHT], [50, 0]);
    const width = interpolate(height.value, [HEIGHT, MIN_HEIGHT], [-0, 40]);
    return {
      left,
      width,
    };
  });

  return {
    opacityLogo,
    arrayStyle,
    translateY: height,
    rStyle,
  };
};

export default useSearchAnimation;
export { HEIGHT, MIN_HEIGHT };
