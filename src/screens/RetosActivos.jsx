import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/themed";
import { useLayoutEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const RetosActivos = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={{ backgroundColor: "#e4d0a3" }}>
      <Image
        source={require("../../assets/activos.jpg")}
        containerStyle={{ width: "100%", height: 220 }}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Text
        style={{
          height: 590,
          color: "black",
          fontSize: 32,
          lineHeight: 84,
          margin: 5,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        Retos Activos
      </Text>
    </View>
  );
};
export default RetosActivos;
