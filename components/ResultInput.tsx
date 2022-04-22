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
        backgroundColor: colors.card,
        width: "100%",
        maxHeight: 300,
        borderRadius: 5,
        paddingVertical: 5,
        marginTop: 5,
        // position: "absolute" // usar modal para solucionar esto
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
