import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { useLayoutEffect } from "react";
import { ActivityIndicator, Button, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Evolucion = () => {
  const navigation = useNavigation();

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
    <ScrollView style={{ backgroundColor: "#95d7e7" }}>
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
        Evolucion <Button title="Detalle Reto" onPress={() => navigation.navigate("DetalleReto")} />
      </Text>
      <Button title="Filter 1" onPress={() => alert("Filter 1")} />
      <Button title="Filter 2" onPress={() => alert("Filter 2")} />
      <Button title="Filter 3" onPress={() => alert("Filter 3")} />
      <Button title="Nuevo Reto" onPress={() => navigation.navigate("NuevoReto")} />
    </ScrollView>
  );
};
export default Evolucion;
