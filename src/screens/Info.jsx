import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React, { useLayoutEffect } from "react";
import { Button, Image, Text, View } from "react-native";
import imagenDeFondo from "../../assets/background_image.jpg";
import styles from "../styles/StyleInicio";

const Info = () => {
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
        </View>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <Image source={imagenDeFondo} style={styles.ImageBackground}></Image>
      <Text
        style={{
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
      <Button title="Guardar" onPress={() => alert("Guardar")} />
    </View>
  );
};

export default Info;
