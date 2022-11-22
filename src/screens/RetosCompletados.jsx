import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { useLayoutEffect } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

const RetosCompletados = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "center",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Icon name="chevron-left" type="entypo" onPress={() => navigation.goBack()} />
        </View>
      ),

      headerRight: () => (
        <View style={{ display: "flex", flexDirection: "row", marginRight: 10, marginTop: 5 }}>
          <Icon
            style={{ marginRight: 20 }}
            name="home"
            type="materialcommunityicons"
            onPress={() => navigation.navigate("Inicio")}
          />
          <Icon name="info-with-circle" type="entypo" onPress={() => navigation.navigate("Info")} />
        </View>
      ),
    });
  });

  return (
    <View style={{ backgroundColor: "#b7c2dd" }}>
      <Image
        source={require("../../assets/completados.jpg")}
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
        Retos Completados
      </Text>
    </View>
  );
};
export default RetosCompletados;
