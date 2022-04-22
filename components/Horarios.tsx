import { useTheme } from "@react-navigation/native";
import { FC } from "react";
import { Text, View } from "react-native";

const Horarios: FC = () => {
  const { colors } = useTheme()

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ color: colors.text }}>Lunes a Viernes:</Text>
        <Text style={{ color: colors.text }}>de 05:30 a 23:40</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: colors.text }}>Sábado:</Text>
        <Text style={{ color: colors.text }}>de 05:30 a 23:40</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: colors.text }}>Domingo y Festivos:</Text>
        <Text style={{ color: colors.text }}>de 05:30 a 23:30</Text>
      </View>
    </View>
  );
};

export default Horarios;