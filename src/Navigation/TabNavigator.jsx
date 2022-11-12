import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import Contactar from "../screens/Contactar";
import Evolucion from "../screens/Evolucion";
import Info from "../screens/Info";
import Inicio from "../screens/Inicio";
import NuevoReto from "../screens/NuevoReto";
import Perfil from "../screens/Perfil";
import RetosActivos from "../screens/RetosActivos";
import RetosCompletados from "../screens/RetosCompletados";
// import Icons
import { Icon } from "@rneui/themed";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  // Remove header information
  const navigations = useNavigation();
  useLayoutEffect(() => {
    navigations.setOptions({
      headerShown: false,
    });
  });

  // Icons and colors from navigation tab
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabActiveTintColor: "green",
        // tabBarLabelStyle: {
        //   fontSize: 12,
        // },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Evolucion") {
            return <Icon name="area-graph" type="entypo" color={focused ? "blue" : "gray"} size={focused ? 25 : 20} />;
          } else if (route.name === "Nuevo Reto") {
            return <Icon name="add-to-list" type="entypo" color={focused ? "blue" : "gray"} size={focused ? 25 : 20} />;
          } else if (route.name === "Perfil") {
            return <Icon name="user" type="entypo" color={focused ? "blue" : "gray"} size={focused ? 25 : 20} />;
          } else if (route.name === "Contactar") {
            return <Icon name="mail" type="entypo" color={focused ? "blue" : "gray"} size={focused ? 25 : 20} />;
          } else if (route.name === "Activos") {
            return <Icon name="flag" type="entypo" color={focused ? "blue" : "gray"} size={focused ? 25 : 20} />;
          } else if (route.name === "Completados") {
            return <Icon name="box" type="entypo" color={focused ? "blue" : "gray"} size={focused ? 25 : 20} />;
          } else if (route.name === "Inicio") {
            return <Icon name="box" type="entypo" color={focused ? "blue" : "gray"} size={focused ? 25 : 20} />;
          }
        },
      })}
    >
      <Tab.Screen name="Evolucion" component={Evolucion} />
      <Tab.Screen name="Nuevo Reto" component={NuevoReto} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Contactar" component={Contactar} />
      <Tab.Screen name="Activos" component={RetosActivos} />
      <Tab.Screen name="Completados" component={RetosCompletados} />
      <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
