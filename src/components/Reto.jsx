import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/themed";
import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useTailwind } from "tailwind-rn";

function Reto({ nombre, detalle, completado, categoria, tiempo, activo, prioridad }) {
  const tw = useTailwind();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate("DetalleReto", {
          nombre: nombre,
          detalle: detalle,
          completado: completado,
          categoria: categoria,
          tiempo: tiempo,
          activo: activo,
          prioridad: prioridad,
        })
      }
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          borderBottomColor: "black",
          borderWidth: 1,
          margin: 5,
        }}
      >
        <View style={{ margin: 5, flex: 2 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>{nombre}</Text>
          <Text style={{ fontSize: 14 }}>{detalle}</Text>
        </View>
        <View style={{ margin: 5, marginRight: 10, justifyContent: "center", alignItems: "center" }}>
          <Text>{completado}</Text>

          <AntDesign name="right" size={18} color="black" style={{ textAlign: "right" }} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default Reto;
