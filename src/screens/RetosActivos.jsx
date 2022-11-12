import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { useLayoutEffect } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

const RetosActivos = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,

      headerLeft: () => (
        <View style={{ marginLeft: 20, marginTop: 3 }}>
          <Icon name="arrowleft" type="antdesign" onPress={() => navigation.navigate("Inicio")} />
        </View>
      ),
      headerRight: () => (
        <View style={{ marginRight: 20, marginTop: 5 }}>
          <Icon name="info-with-circle" type="entypo" onPress={() => navigation.navigate("Info")} />
        </View>
      ),
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
