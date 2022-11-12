import { ActivityIndicator, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/themed";
import { useLayoutEffect } from "react";

const NuevoReto = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={{ backgroundColor: "#998830" }}>
      <Image
        source={require("../../assets/new-goal.jpg")}
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
        Nuevo Reto
      </Text>
    </View>
  );
};
export default NuevoReto;
