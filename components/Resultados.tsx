import { View, FlatList } from "react-native";
import Horarios from "./Horarios";
import ParaderoItem from "./ParaderoItem";

const recorrido = require("../recorrido.json");

const Resultado = () => {
  return (
    <View>
      <Horarios />
      <FlatList
        data={recorrido.ida.paraderos}
        renderItem={({ item }) => <ParaderoItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Resultado;
