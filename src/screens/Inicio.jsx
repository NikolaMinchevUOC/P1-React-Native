import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React, { useLayoutEffect } from "react";
import { Button, Image, Pressable, Text, View } from "react-native";
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
    <View style={{ backgroundColor: "white", flexDirection: "column" }}>
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
      <View style={{ justifyContent: "flex-end" }}>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Evolucion")}>
          <Text style={styles.text}>Evolucion</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate("NuevoReto")}>
          <Text style={styles.text}>Nuevo Reto</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Perfil")}>
          <Text style={styles.text}>Perfil</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Contactar")}>
          <Text style={styles.text}>Contactar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Activos")}>
          <Text style={styles.text}>Retos Activos</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Completados")}>
          <Text style={styles.text}>Retos Completados</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Inicio;
