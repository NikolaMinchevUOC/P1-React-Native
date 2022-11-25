import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 0,
    flexGrow: 1,
    backgroundColor: "white",
  },
  ImageBackground: {
    height: 220,
    width: "100%",
    alignItems: "stretch",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    margin: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  border: {
    borderBottomColor: "black",
    borderWidth: 1,
  },
});
