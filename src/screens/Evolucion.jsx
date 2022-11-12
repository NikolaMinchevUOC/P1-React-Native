import { ActivityIndicator, ScrollView, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/themed";
import { useLayoutEffect } from "react";

const Evolucion = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <ScrollView style={{ backgroundColor: "#95d7e7" }}>
      <Image
        source={require("../../assets/evolucion.jpg")}
        containerStyle={{ width: "100%", aspectRatio: 3 / 2 }}
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
        Evolucion
      </Text>
    </ScrollView>
  );
};
export default Evolucion;
