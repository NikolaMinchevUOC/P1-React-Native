import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Loader from "../components/Loader";
import Reto from "../components/Reto";
import { db } from "../db/firebaseConfig";
import styles from "../styles/StyleInicio";

const Evolucion = () => {
  const navigation = useNavigation();

  const [selectedId, setSelectedId] = useState(null);

  const [goals, setGoals] = useState([]);

  const [loading, setLoading] = useState(false);

  // Base de datos
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        onSnapshot(collection(db, "retos"), (snapshot) => {
          const docList = [];

          snapshot.forEach((doc) => {
            docList.push(doc.data());
          });

          setGoals(docList);
        });
      } catch (error) {
        console.log(error);
      }
    }, 800);
  }, []);
  //console.log(goals.length);
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

  const stylesBtn = StyleSheet.create({});

  // Renderizar los retos en el FlatList
  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    // const color = item.id === selectedId ? 'white' : 'black';
    //console.log(item.id);
    return (
      <Reto
        id={item.id}
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
    <View style={{ backgroundColor: "white", flexDirection: "column", flex: 1 }}>
      <Loader visible={loading} />
      <Image
        source={require("../../assets/evolucion.jpg")}
        containerStyle={{ width: "100%" }}
        PlaceholderContent={<ActivityIndicator />}
      />

      <FlatList
        style={{ backgroundColor: "white" }}
        data={goals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />

      <View style={{ backgroundColor: "white", justifyContent: "flex-end" }}>
        <Pressable style={styles.button} onPress={() => navigation.navigate("NuevoReto")}>
          <Text style={styles.text}>Nuevo Reto</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Activos")}>
          <Text style={styles.text}>Retos Activos</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default Evolucion;
