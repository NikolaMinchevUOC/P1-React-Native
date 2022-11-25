import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React, { useLayoutEffect } from "react";
import { Button, Image, Pressable, ScrollView, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import imagenDeFondo from "../../assets/background_image.jpg";
import styles from "../styles/StyleInicio";

const DetalleReto = ({ route }) => {
  const navigation = useNavigation();
  const tw = useTailwind();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "center",
      headerStyle: {
				backgroundColor: 'lightblue',
			},
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
    <View style={{ backgroundColor: "lightblue", flexDirection: "column", flex: 1 }}>
      <Image source={imagenDeFondo} style={styles.ImageBackground}></Image>
      <ScrollView
        style={{

          backgroundColor: "grey",
          flexDirection: "column",
          borderRadius: 10,
          borderColor: "lightblue",
          borderWidth: 0,
          margin: 5,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 15,
            padding: 1,
            color: "white",
          }}
        >
          Nombre
        </Text>
        <Text style={{
            padding: 1,
            color: "#95d7e7",
          }}> {route.params.nombre}</Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 15,
            padding: 1,
            color: "white",
          }}
        >
          Descripcion
        </Text>
        <Text style={{
            padding: 1,
            color: "#95d7e7",
          }}> {route.params.detalle}</Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 15,
            padding: 1,
            color: "white",
          }}
        >
          Categoria
        </Text>
        <Text style={{
            padding: 1,
            color: "#95d7e7",
          }}> {route.params.categoria}</Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 15,
            padding: 1,
            color: "white",
          }}
        >
          Tiempo
        </Text>
        <Text style={{
            padding: 1,
            color: "#95d7e7",
          }}> {route.params.tiempo}</Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 15,
            padding: 1,
            color: "white",
          }}
        >
          Activo
        </Text>
        <Text style={{
            padding: 1,
            color: "#95d7e7",
          }}> {route.params.activo ? "Activo" : "Inactivo"}</Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 15,
            padding: 1,
            color: "white",
          }}
        >
          Periodicidad
        </Text>
        <Text style={{
            padding: 1,
            color: "#95d7e7",
          }}> {route.params.periodicidad}</Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 15,
            padding: 1,
            color: "white",
          }}
        >
          Completado
        </Text>
        <Text style={{
            padding: 1,
            color: "#95d7e7",
            paddingBottom:10
          }}> {route.params.completado}</Text>
      </ScrollView>
      <View style={{ justifyContent: "flex-end" }}>
        <Pressable style={styles.button} onPress={() => alert("Editar")}>
          <Text style={styles.text}>Editar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate("NuevoReto")}>
          <Text style={styles.text}>Nuevo Reto</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DetalleReto;
