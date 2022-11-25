import { ActivityIndicator, Button, Image, Pressable, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { useLayoutEffect } from "react";
import styles from "../styles/StyleInicio";
const NuevoReto = () => {
  const navigation = useNavigation();

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
      <Image
        source={require("../../assets/new-goal.jpg")}
        containerStyle={{ width: "100%", height: 220 }}
        PlaceholderContent={<ActivityIndicator />}
      />

      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Pressable style={styles.button} onPress={() => alert("Guardar")}>
          <Text style={styles.text}>Guardar</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default NuevoReto;
