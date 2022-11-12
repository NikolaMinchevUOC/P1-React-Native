import React from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import styles from "../styles/StyleMenu";

const Menu = () => {
  let alarmEvolucion = () => {
    Alert.alert("Botón evolución pulsado");
  };
  let alarmNuevoReto = () => {
    Alert.alert("Botón Nuevo Reto pulsado");
  };
  let alarmPerfil = () => {
    Alert.alert("Botón Perfil pulsado");
  };
  let alarmContactar = () => {
    Alert.alert("Botón evolución pulsado");
  };
  let alarmSobreNosotros = () => {
    Alert.alert("Botón Sobre Nosotros pulsado");
  };
  let alarmConfiguracion = () => {
    Alert.alert("Botón Configuración pulsado");
  };
  return (
    <View style={styles.container}>
      <View style={styles.Row1}>
        <TouchableOpacity style={styles.button} onPress={alarmEvolucion}>
          <Text>Evolución</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={alarmNuevoReto}>
          <Text>Nuevo reto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={alarmPerfil}>
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Row2}>
        <TouchableOpacity style={styles.button} onPress={alarmContactar}>
          <Text>Contactar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={alarmSobreNosotros}>
          <Text>Sobre nosotros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={alarmConfiguracion}>
          <Text>Configuracion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
