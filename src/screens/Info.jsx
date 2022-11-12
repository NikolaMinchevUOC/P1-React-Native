import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React, { useLayoutEffect } from "react";
import { Image, Text, View } from "react-native";
import imagenDeFondo from "../../assets/background_image.jpg";
import styles from "../styles/StyleInicio";

const Info = () => {
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
    <View style={styles.container}>
      <Image source={imagenDeFondo} style={styles.ImageBackground}></Image>
      <Text
        style={{
          height: 390,
          color: "black",
          fontSize: 32,
          lineHeight: 84,
          margin: 5,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        Info
      </Text>
    </View>
  );
};

export default Info;
