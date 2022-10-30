import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Inicio from "./Main";
import Navegador from "./Navegador";

const MainScreen = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 3.5 }}>
        <Inicio />
      </View>
      <View style={{ flex: 1 }}>
        <Navegador />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MainScreen;
