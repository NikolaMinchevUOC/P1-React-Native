import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { useLayoutEffect } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
const Contactar = () => {
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
    <View style={{ backgroundColor: "#008d92" }}>
      <Image
        source={require("../../assets/contactar.jpg")}
        containerStyle={{ width: "100%", height: 220 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Image
        source={require("../../assets/contact-form-example.png")}
        style={{
          resizeMode: "cover",
          height: 400,
          width: "100%",
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
};
export default Contactar;
