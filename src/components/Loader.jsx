import { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Colors, ProgressBar } from "react-native-paper";
const Loader = ({ visible = false }) => {
  const { width, height } = useWindowDimensions();
  const [status, setStatus] = useState(0);
  setTimeout(() => setStatus(1), 500);

  return (
    visible && (
      <View style={[style.container, { height, width }]}>
        <View style={style.loader}>
          <Text style={{ marginLeft: 10, fontSize: 16, textAlign: "center" }}>Cargando datos...</Text>
        </View>
        <ProgressBar style={{ marginTop: 0 }} progress={status} color="#00BCD4" />
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  example: {
    marginVertical: 24,
  },
});

export default Loader;
