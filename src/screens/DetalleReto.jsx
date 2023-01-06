import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import React, { useLayoutEffect } from "react";
import { Button, Image, Pressable, ScrollView, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import imagenDeFondo from "../../assets/background_image.jpg";
import { db } from "../db/firebaseConfig";
import styles from "../styles/StyleInicio";
const DetalleReto = ({ route }) => {
  const navigation = useNavigation();
  const tw = useTailwind();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "white",
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
  console.log(route.params);

  const borrar = () => {
    deleteDoc(doc(db, "retos", route.params.id))
      .then(() => {
        console.log("goal deleted");
      })
      .catch((error) => {
        console.log(error);
      });
    navigation.navigate("Evolucion");
    alert("Reto borrado");
  };

  return (
    <View style={{ backgroundColor: "white", flexDirection: "column", flex: 1 }}>
      <Image source={imagenDeFondo} style={styles.ImageBackground}></Image>
      <ScrollView
        style={{
          backgroundColor: "white",
          flexDirection: "column",
          borderRadius: 10,

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
            color: "black",
          }}
        >
          Nombre
        </Text>
        <Text
          style={{
            padding: 1,
            color: "black",
          }}
        >
          {" "}
          {route.params.nombre}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 15,
            padding: 1,
            color: "black",
          }}
        >
          Descripcion
        </Text>
        <Text
          style={{
            padding: 1,
            color: "black",
          }}
        >
          {" "}
          {route.params.detalle}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 15,
            padding: 1,
            color: "black",
          }}
        >
          Categoria
        </Text>
        <Text
          style={{
            padding: 1,
            color: "black",
          }}
        >
          {" "}
          {route.params.categoria}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 15,
            padding: 1,
            color: "black",
          }}
        >
          Tiempo
        </Text>
        <Text
          style={{
            padding: 1,
            color: "black",
          }}
        >
          {" "}
          {route.params.tiempo}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 15,
            padding: 1,
            color: "black",
          }}
        >
          Activo
        </Text>
        <Text
          style={{
            padding: 1,
            color: "black",
          }}
        >
          {" "}
          {route.params.activo ? "Activo" : "Inactivo"}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 15,
            padding: 1,
            color: "black",
          }}
        >
          Periodicidad
        </Text>
        <Text
          style={{
            padding: 1,
            color: "black",
          }}
        >
          {" "}
          {route.params.periodicidad}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 15,
            padding: 1,
            color: "black",
          }}
        >
          Completado
        </Text>
        <Text
          style={{
            padding: 1,
            color: "black",
            paddingBottom: 10,
          }}
        >
          {" "}
          {route.params.completado}
        </Text>
      </ScrollView>
      <View style={{ justifyContent: "flex-end" }}>
        <Pressable style={styles.button} onPress={() => borrar()}>
          <Text style={styles.text}>Borrar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate("NuevoReto")}>
          <Text style={styles.text}>Nuevo Reto</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DetalleReto;
