import { FC, useRef, useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

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

const ResultInput: FC<{
  data: Array<any>;
  callback: (select: string) => void;
}> = ({ data, callback }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        backgroundColor: colors.card,
        width: "100%",
        maxHeight: 300,
        borderRadius: 5,
        paddingVertical: 5,
        marginTop: 5,
        
      }}
    >
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                callback(item);
              }}
              style={{
                borderBottomWidth: 1,
                borderColor: "#eee",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 16, padding: 5 }}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        
          <Text style={{
            padding: 10,
            fontWeight: "bold",
            fontSize: 16
          }}>No encontramos o no existe el recorrido 😅</Text>
      )}
    </View>
  );
};

interface InputProps {
  value: string;
  callback: (text: string) => void;
}

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
