import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React, { useLayoutEffect } from "react";
import { Button, Image, Text, View } from "react-native";
import imagenDeFondo from "../../assets/background_image.jpg";
import styles from "../styles/StyleInicio";

const DetalleReto = () => {
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
    <View style={styles.container}>
      <Image source={imagenDeFondo} style={styles.ImageBackground}></Image>
      <Text
        style={{
          height: 290,
          color: "black",
          fontSize: 32,
          lineHeight: 84,
          margin: 5,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        DetalleReto
      </Text>
      <Button title="Editar" onPress={() => alert("Editar")} />
      <Button title="Nuevo Reto" onPress={() => navigation.navigate("NuevoReto")} />
    </View>
  );
};

export default DetalleReto;
