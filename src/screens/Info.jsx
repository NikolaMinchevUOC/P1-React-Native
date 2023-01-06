import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React, { useLayoutEffect } from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import imagenDeFondo from "../../assets/background_image.jpg";
import styles from "../styles/StyleInicio";
const Info = () => {
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
        </View>
      ),
    });
  });
  return (
    <View style={(styles.container, { paddingTop: 50 })}>
      <ScrollView>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            lineHeight: 20,
            margin: 1,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Aplicacion creada por el grupo Reactivados
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 28,
            lineHeight: 50,
            margin: 10,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Integrantes
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            lineHeight: 25,
            margin: 5,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Iago Posse Solá
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            lineHeight: 25,
            margin: 5,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Gerard Siles Aligue
        </Text>
        <Image
          source={require("../../assets/gerard.jpg")}
          style={{
            height: 150,
            width: 200,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            color: "black",
            fontSize: 14,
            lineHeight: 25,
            margin: 5,
            textAlign: "center",
          }}
        >
          Nacido en Espana con sangre vikinga, viviendo a lo loco en Islandia entre hielo y lava
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            lineHeight: 25,
            margin: 5,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Nikola Minchev Penev
        </Text>
      </ScrollView>
    </View>
  );
};

export default Info;
