import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React, { useLayoutEffect } from "react";
import { Button, Image, Text, View } from "react-native";
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
          color: "black",
          fontSize: 32,
          margin: 5,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        DetalleReto
      </Text>
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          borderBottomColor: "black",
          borderWidth: 1,
          margin: 5,
          padding: 5,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
          }}
        >
          Nombre
        </Text>
        <Text> {route.params.nombre}</Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
          }}
        >
          Descripcion
        </Text>
        <Text> {route.params.detalle}</Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
          }}
        >
          Categoria
        </Text>
        <Text> {route.params.categoria}</Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
          }}
        >
          Tiempo
        </Text>
        <Text> {route.params.tiempo}</Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
          }}
        >
          Activo
        </Text>
        <Text> {route.params.activo ? "Activo" : "Inactivo"}</Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
          }}
        >
          Periodicidad
        </Text>
        <Text> {route.params.periodicidad}</Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
          }}
        >
          Completado
        </Text>
        <Text> {route.params.completado}</Text>
      </View>
      <Button title="Editar" onPress={() => alert("Editar")} />
      <Button title="Nuevo Reto" onPress={() => navigation.navigate("NuevoReto")} />
    </View>
  );
};

export default DetalleReto;
