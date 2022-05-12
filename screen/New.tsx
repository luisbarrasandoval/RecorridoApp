import { FC, useEffect } from "react";
import { Text, View } from "react-native";
import Resultado from "../components/Resultados";
import { useHeaderContext } from "../contexts/HeaderContext";


const New: FC<{ navigation: any }> = () => {

  const { text } = useHeaderContext();

  return (
    <View>
      {/* <Resultado /> */}
      <Text>{text}</Text>
    </View>
  );
};

export default New;
