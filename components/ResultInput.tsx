import { FC } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";

const ResultInput: FC<{
  data: Array<any>;
  callback: (select: string) => void;
}> = ({ data, callback }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        backgroundColor: colors.background,
        marginTop: 0,
        maxHeight: 300,
        borderWidth: 1,
        borderTopWidth: 0,
        borderRadius: 5,
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
        top: -1,
        width: "90%",
        margin: "5%",
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
              <Text style={{ fontSize: 16, padding: 5 }}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text
          style={{
            padding: 10,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          No encontramos o no existe el recorrido 😅
        </Text>
      )}
    </View>
  );
};

export default ResultInput;
