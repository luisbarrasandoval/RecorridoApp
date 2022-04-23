import { FC, useEffect } from "react";
import { Text, View } from "react-native";
import Resultado from "../components/Resultados";

import HeaderSearch from "../components/HeaderSearch";

const New: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View>
      <Resultado />
    </View>
  );
};

export default New;
