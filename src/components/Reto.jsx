import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Icon, Image } from "@rneui/themed";
import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useTailwind } from "tailwind-rn";

function Reto({ nombre, detalle, completado, categoria, tiempo, activo, periodicidad }) {
  const tw = useTailwind();
  const navigation = useNavigation();

  const renderElement = (categoria) => {
    if (categoria == "Profesional") {
      return (
        <MaterialCommunityIcons
          style={{ marginLeft: 5, marginRight: 5 }}
          name="professional-hexagon"
          size={24}
          color="black"
        />
      );
    } else if (categoria == "Personal") {
      return <MaterialCommunityIcons style={{ marginLeft: 5, marginRight: 5 }} name="one-up" size={24} color="black" />;
    } else {
      return (
        <MaterialCommunityIcons style={{ marginLeft: 5, marginRight: 5 }} name="battery-high" size={24} color="black" />
      );
    }
  };

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
          periodicidad: periodicidad,
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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {renderElement(categoria)}
        <View style={{ margin: 5, flex: 2 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>{nombre}</Text>
          <Text style={{ fontSize: 14 }}>{detalle}</Text>
        </View>
        <View style={{ margin: 5, marginRight: 10, justifyContent: "center", alignItems: "center" }}>
          <Text style={{  backgroundColor: "red", borderRadius: 7, }}>{completado}</Text>

          <AntDesign name="right" size={18} color="black" style={{ textAlign: "right" }} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default Reto;
