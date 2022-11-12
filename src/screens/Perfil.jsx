import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/themed";
import { useLayoutEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
const Perfil = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={{ backgroundColor: "#e0eab5" }}>
      <Image
        source={require("../../assets/perfil.jpg")}
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
        Perfil
      </Text>
    </View>
  );
};
export default Perfil;
