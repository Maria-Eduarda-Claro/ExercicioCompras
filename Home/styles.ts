import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#131016",
  },

  title: { color: "#ffff", fontSize: 24, fontWeight: "bold", marginTop: 48 },

  data: {
    color: "#fff",
    fontSize: 14,
  },

  input: {
    height: 56,
    backgroundColor: "#1F1E25",
    color: "#fff",
    paddingLeft: 16,
    borderRadius: 5,
    fontSize: 18,
  },

  button: {
    height: 56,
    backgroundColor: "#31cf67",
    color: "#fff",
    paddingLeft: 16,
    borderRadius: 5,
    fontSize: 18,
    justifyContent: 'center',
    alignItems:'center'
   
  },
  textButton : {
    color: "#ffff", fontSize: 24, fontWeight: "bold"
  },

  form: {
    height: 200,
    marginTop: 10,
    color: "#fff",
  },

  listEmpty: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
