import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React, { useLayoutEffect } from "react";
import { Button, Image, Pressable, ScrollView, Text, View } from "react-native";
import imagenDeFondo from "../../assets/background_image.jpg";
import styles from "../styles/StyleInicio";

const Inicio = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "center",
      headerStyle: {
				backgroundColor: 'lightblue',
			},
      headerRight: () => (
        <View style={{ marginRight: 20, marginTop: 5 }}>
          <Icon name="info-with-circle" type="entypo" onPress={() => navigation.navigate("Info")} />
        </View>
      ),
    });
  });
  return (
    <ScrollView style={{ backgroundColor: "lightblue", flexDirection: "column", flex: 1 }}>
    <View style={{  flexDirection: "column" }}>
      <Image source={imagenDeFondo} style={styles.ImageBackground}></Image>
      
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
    </ScrollView>
  );
};

export default Inicio;
