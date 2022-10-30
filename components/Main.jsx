import { Image, StyleSheet, View } from "react-native";
import backgroundImage from "../assets/mobile-background.jpg";

const Inicio = () => {
  return (
    <View>
      <Image source={backgroundImage} style={styles.ImageBackground}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  ImageBackground: {
    resizeMode: "cover",
    width: "100%",
  },
});
export default Inicio;
