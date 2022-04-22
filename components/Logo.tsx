import { FC } from "react";
import { Image, View, ViewProps } from "react-native";
import Animated from "react-native-reanimated";

// podria considerar diferentes formatos, tamanios y colores
// pero para este ejemplo lo dejare asi
const Logo: FC<ViewProps> = (props) => {
  return (
    <Animated.View {...props}>
      <Image
        source={require("../assets/logo.png")}
        style={{
          width: 200,
          height: 50,
          resizeMode: "contain",
        }}
      />
    </Animated.View>
  );
};

export default Logo;
