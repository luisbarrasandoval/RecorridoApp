import { useTheme } from "@react-navigation/native";
import { FC, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Paradero } from "../interfaces/Paradero";
import { Ionicons } from "@expo/vector-icons";

const ParaderoItem: FC<Paradero> = ({
  id,
  cod,
  comuna,
  name,
  num,
  pos,
  servicios,
  stop,
  type,
}) => {
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
        backgroundColor: colors.background,
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 20,
          backgroundColor: active ? "red" : colors.card,
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
            backgroundColor: active ? "red" : colors.card,
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
            color: colors.textSecondary,
          }}
        >
          {cod}
        </Text>
        <Text
          style={{
            fontWeight: active ? "bold" : "normal",
            color: colors.textSecondary,
          }}
        >
          {name}
        </Text>
        <Text>{comuna}</Text>
      </View>

      <View>
        
      </View>
    </Pressable>
  );
};

export default ParaderoItem;
