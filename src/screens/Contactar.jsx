import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/themed";
import { useLayoutEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
const Contactar = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
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
