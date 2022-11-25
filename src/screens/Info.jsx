import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React, { useLayoutEffect } from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";
import imagenDeFondo from "../../assets/background_image.jpg";
import styles from "../styles/StyleInicio";

const Info = () => {
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
        </View>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <Image source={imagenDeFondo} style={styles.ImageBackground}></Image>
      
      <ScrollView>
 
      <Text
        style={{
          color: "black",
          fontSize: 18,
          lineHeight: 20,
          margin: 1,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "white",
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
          backgroundColor: "white",
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
          backgroundColor: "white",
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
          backgroundColor: "white",
        }}
      >
        Gerard Siles Aligue
      </Text>
      <Text
        style={{
          color: "black",
          fontSize: 18,
          lineHeight: 25,
          margin: 5,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        Nikola Minchev Penev
      </Text>
      </ScrollView>
    </View>
  );
};

export default Info;
