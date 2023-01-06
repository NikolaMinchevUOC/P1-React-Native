import { useNavigation } from "@react-navigation/native";
import { Icon, Input } from "@rneui/themed";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import uuid from "react-native-uuid";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { db } from "../db/firebaseConfig";
import styles from "../styles/StyleInicio";

const NuevoReto = () => {
  const navigation = useNavigation();

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

  const [inputs, setInputs] = React.useState({
    nombre: "",
    detalle: "",
    categoria: "",
    tiempo: "",
    periodicidad: "",
    prioridad: "",
  });
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (inputs.nombre === "") {
      handleError("Debe rellenar el campo nombre", "nombre");
      isValid = false;
    }

    if (inputs.detalle === "") {
      handleError("Debe rellenar el campo detalle", "detalle");
      isValid = false;
    }

    if (inputs.categoria === "") {
      handleError("Debe rellenar el campo categoria", "categoria");
      isValid = false;
    }

    if (inputs.tiempo === "" || isNaN(inputs.tiempo)) {
      if (isNaN(inputs.tiempo)) {
        handleError("El campo tiempo solo puede ser rellenado con números", "tiempo");
      } else {
        handleError("Debe rellenar el campo tiempo", "tiempo");
      }
      isValid = false;
    }

    if (inputs.periodicidad === "" || isNaN(inputs.periodicidad)) {
      if (isNaN(inputs.periodicidad)) {
        handleError("El campo periodicidad solo puede ser rellenado con números", "periodicidad");
      } else {
        handleError("Debe rellenar el campo periodicidad", "periodicidad");
      }
      isValid = false;
    }

    if (inputs.prioridad === "") {
      handleError("Debe rellenar el campo prioridad", "prioridad");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    let idd = uuid.v4();
    const retosRef = collection(db, "retos");
    setDoc(doc(retosRef, idd), {
      id: idd,
      activo: true,
      categoria: inputs.categoria,
      completado: "0%",
      detalle: inputs.detalle,
      nombre: inputs.nombre,
      periodicidad: Number(inputs.periodicidad),
      prioridad: inputs.prioridad,
      tiempo: Number(inputs.tiempo),
    })
      .then(() => {
        console.log("goal submitted");
      })
      .catch((error) => {
        console.log(error);
      });

    navigation.navigate("Evolucion");
    alert("Reto creado");
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>Nuevo reto</Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "nombre")}
            onFocus={() => handleError(null, "nombre")}
            label="Nombre"
            placeholder="Escribe el nombre del reto"
            errorMessage={errors.nombre}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "detalle")}
            onFocus={() => handleError(null, "detalle")}
            label="Detalle"
            placeholder="Describe tu reto"
            errorMessage={errors.detalle}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "categoria")}
            onFocus={() => handleError(null, "categoria")}
            label="Categoria"
            placeholder="Escribe la categoria"
            errorMessage={errors.categoria}
          />

          <Input
            keyboardType="numeric"
            onChangeText={(text) => handleOnchange(text, "tiempo")}
            onFocus={() => handleError(null, "tiempo")}
            label="Duración"
            placeholder="Días de duración"
            errorMessage={errors.tiempo}
          />

          <Input
            keyboardType="numeric"
            onChangeText={(text) => handleOnchange(text, "periodicidad")}
            onFocus={() => handleError(null, "periodicidad")}
            label="Periodicidad"
            placeholder="Escribe la periodicidad semanal"
            errorMessage={errors.periodicidad}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "prioridad")}
            onFocus={() => handleError(null, "prioridad")}
            label="Prioridad"
            placeholder="Atla, media o baja"
            errorMessage={errors.prioridad}
          />

          <Pressable style={styles.button} onPress={validate}>
            <Text style={styles.text}>Guardar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default NuevoReto;
