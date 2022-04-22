import { useTheme } from "@react-navigation/native";
import { FC, useState } from "react";
import { Pressable, Text, View } from "react-native";

const ParaderoItem: FC = () => {
  const { colors } = useTheme();

  const [active, setActive] = useState(false);

  return (
    <Pressable
      onPressIn={() => {
        setActive(true);
      }}
      onPressOut={() => {
        setActive(false);
      }}
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 20,
          backgroundColor: active ? colors.primary : colors.background,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 20,
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            backgroundColor: active ? colors.primary : colors.background,
          }}
        ></View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
          flex: 1,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          PB1607
        </Text>
        <Text
          style={{
            fontWeight: active ? "bold" : "normal",
          }}
        >
          Avenida Recoleta esq. Jacarandá
        </Text>
      </View>
    </Pressable>
  );
};

export default ParaderoItem;
