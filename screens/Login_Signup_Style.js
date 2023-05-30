import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 50,
    flexDirection: "column",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderColor: "#DEDEDE",
  },
  button: {
    backgroundColor: "#DEDEDE",
    width: 75,
    height: 40,
    justifyContent: "space-evenly",
    margin: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 25,
  },
  head: {
    fontSize: 45,
    fontWeight: "bold",
  },
  inputs: {
    width: 300,
    height: 50,
    backgroundColor: "#DEDEDE",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 30,
    paddingLeft: 20,
  },
});
