import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contactar from "../screens/Contactar";
import DetalleReto from "../screens/DetalleReto";
import Evolucion from "../screens/Evolucion";
import Info from "../screens/Info";
import Inicio from "../screens/Inicio";
import NuevoReto from "../screens/NuevoReto";
import Perfil from "../screens/Perfil";
import RetosActivos from "../screens/RetosActivos";
import RetosCompletados from "../screens/RetosCompletados";
import TabNavigator from "./TabNavigator";
const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Inicio">
      <RootStack.Screen name="Evolucion" component={Evolucion} />
      <RootStack.Screen name="NuevoReto" component={NuevoReto} />
      <RootStack.Screen name="Perfil" component={Perfil} />
      <RootStack.Screen name="Contactar" component={Contactar} />
      <RootStack.Screen name="Activos" component={RetosActivos} />
      <RootStack.Screen name="Completados" component={RetosCompletados} />
      <RootStack.Screen name="DetalleReto" component={DetalleReto} />
      <RootStack.Screen
        name="Inicio"
        component={Inicio}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />
      <RootStack.Screen
        name="Info"
        component={Info}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />
    </RootStack.Navigator>
  );
};
export default RootNavigator;
