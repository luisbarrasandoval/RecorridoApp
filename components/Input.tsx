import { FC, useRef, useState } from "react";
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import ResultInput from "./ResultInput";
import InputProps from "../interfaces/InputProps";

const recorridos = [
  "primero",
  "segundo",
  "tercero",
  "cuarto",
  "quinto",
  "sexto",
  "septimo",
  "octavo",
  "noveno",
  "decimo",
  "undecimo",
  "duodecimo",
  "decimotercero",
  "decimocuarto",
  "decimoquinto",
  "decimosexto",
  "decimoseptimo",
  "decimoctavo",
  "decimonoveno",
  "vigesimo",
  "vigesimoprimero",
  "vigesimosegundo",
  "vigesimotercero",
  "vigesimocuarto",
  "vigesimoquinto",
  "vigesimosexto",
];

const Input: FC<InputProps> = ({ callback }) => {
  const { colors } = useTheme();

  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(true);

  const refInput = useRef<TextInput>(null);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          backgroundColor: colors.card,
          borderRadius: 5,
        }}
      >
        <Ionicons name="bus" size={24} color="black" />
        <TextInput
          ref={refInput}
          onChange={() => {
            setVisible(true);
          }}
          onSubmitEditing={(text) => {
            callback(text.nativeEvent.text);
          }}
          placeholder="Busca tu recorrido!"
          value={value}
          onChangeText={setValue}
          style={{
            flex: 1,
            marginLeft: 10,
          }}
        />
      </View>

      {visible && (
        <ResultInput
          data={recorridos.filter((r) =>
            r.toLowerCase().includes(value.toLocaleLowerCase())
          )}
          callback={(select) => {
            setValue(select);
            setVisible(false);
            refInput.current?.focus();
          }}
        />
      )}
    </View>
  );
};

export default Input;
