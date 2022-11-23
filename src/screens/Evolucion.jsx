import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Reto from "../components/Reto";
import { db } from "../db/firebaseConfig";
const buttonStyle = {
  bottom: 0,
  color: "white",
  fontSize: 42,
  lineHeight: 84,
  margin: 5,
  fontWeight: "bold",
  textAlign: "center",
  backgroundColor: "#000000c0",
  position: "absolute",
  bottom: 50,
  right: 8,
  borderRadius: 50,
};
const Evolucion = () => {
  const navigation = useNavigation();

  const [selectedId, setSelectedId] = useState(null);

  const [goals, setGoals] = useState([]);

  // Base de datos
  useEffect(() => {
    try {
      onSnapshot(collection(db, "retos"), (snapshot) => {
        setGoals(snapshot.docs.map((doc) => doc.data()));
      });
    } catch (error) {
      console.log(error);
    }
  }, [goals]);

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

  // Renderizar los retos en el FlatList
  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    // const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Reto
        key={item.id}
        nombre={item.nombre}
        detalle={item.detalle}
        completado={item.completado}
        categoria={item.categoria}
        tiempo={item.tiempo}
        activo={item.activo}
        periodicidad={item.periodicidad}
      />
    );
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <Image
        source={require("../../assets/evolucion.jpg")}
        containerStyle={{ width: "100%", aspectRatio: 3 / 2 }}
        PlaceholderContent={<ActivityIndicator />}
      />

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
        Evolucion
      </Text>
      <FlatList data={goals} renderItem={renderItem} keyExtractor={(item) => item.id} extraData={selectedId} />

      <Button title="Filter 1" onPress={() => alert("Filter 1")} />
      <Button title="Filter 2" onPress={() => alert("Filter 2")} />
      <Button title="Filter 3" onPress={() => alert("Filter 3")} />
      <Button title="Nuevo Reto" onPress={() => navigation.navigate("NuevoReto")} />
    </View>
  );
};
export default Evolucion;
