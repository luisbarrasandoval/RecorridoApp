import { FC, useRef, useState } from "react";
import { Modal, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import InputProps from "../interfaces/InputProps";
import ResultInput from "./ResultInput";

const lineas = require("../lineas.json");

const Input: FC<InputProps> = ({ callback }) => {
  const { colors } = useTheme();

  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const refInput = useRef<TextInput>(null);

  const Search = (
    <View
      style={{
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.background,
        borderRadius: 5,
      }}
    >
      <Ionicons name="bus" size={24} color={colors.textSecondary} />
      <TextInput
        ref={refInput}
        onSubmitEditing={(text) => {
          callback(text.nativeEvent.text);
        }}
        placeholder="Busca tu recorrido!"
        value={value}
        onChange={(input) => {
          setValue(input.nativeEvent.text);
          setVisible(true);
        }}
        style={{
          marginLeft: 10,
          flex: 1,
          color: colors.textSecondary,
        }}
        placeholderTextColor="#eeee"
      />

      <Ionicons
        name="search"
        size={24}
        color={colors.textSecondary}
        onPress={() => {
          callback(value);
          setVisible(false);
        }}
      />
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {Search}
      <Modal
        visible={visible}
        transparent={true}
        onShow={() => {
          refInput.current?.focus();
        }}
      >
        <View
          style={{
            marginTop: 61,
            paddingHorizontal: 10,
          }}
        >
          {Search}
          <ResultInput
            data={lineas
              .filter((linea: any) =>
                linea.toLowerCase().includes(value.toLowerCase())
              )
              .slice(0, 20)}
            callback={(s) => {
              setValue(s);
              setVisible(false);
              refInput.current?.focus();
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Input;
