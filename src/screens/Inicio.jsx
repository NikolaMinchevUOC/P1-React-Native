import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React, { useLayoutEffect } from "react";
import { Button, Image, Text, View } from "react-native";
import imagenDeFondo from "../../assets/background_image.jpg";
import styles from "../styles/StyleInicio";

const Inicio = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "center",
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
          color: "black",
          fontSize: 32,
          lineHeight: 84,
          margin: 5,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        Inicio
      </Text>
      <Button title="Evolucion" onPress={() => navigation.navigate("Evolucion")} />
      <Button title="Nuevo Reto" onPress={() => navigation.navigate("NuevoReto")} />
      <Button title="Perfil" onPress={() => navigation.navigate("Perfil")} />
      <Button title="Contactar" onPress={() => navigation.navigate("Contactar")} />
      <Button title="Retos Activos" onPress={() => navigation.navigate("Activos")} />
      <Button title="Retos Completados" onPress={() => navigation.navigate("Completados")} />
    </View>
  );
};

export default Inicio;
