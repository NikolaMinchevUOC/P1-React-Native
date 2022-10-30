import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Navegador = () => {
  const onEvolucion = () => Alert.alert("Evolucion apretado");
  const onNuevoReto = () => Alert.alert("Nuevo Reto apretado");
  const onPerfil = () => Alert.alert("Perfil apretado");
  const onContactar = () => Alert.alert("Contactar apretado");
  const onCompletados = () => Alert.alert("Sobre nosotros apretado");
  const onActivos = () => Alert.alert("Configuracion apretado");
  return (
    <View style={styles.container}>
      <View style={styles.Row1}>
        <TouchableOpacity style={styles.button} onPress={onEvolucion}>
          <Text style={styles.text}>Evolución</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onNuevoReto}>
          <Text style={styles.text}>Nuevo reto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPerfil}>
          <Text style={styles.text}>Perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Row2}>
        <TouchableOpacity style={styles.button} onPress={onContactar}>
          <Text style={styles.text}>Contactar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onCompletados}>
          <Text style={styles.text}>Sobre nosotros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onActivos}>
          <Text style={styles.text}>Configuracion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  Row1: {
    flex: 1,
    flexDirection: "row",
  },
  Row2: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4477b2",
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 4,
    marginRight: 4,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
});
export default Navegador;
