import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

interface props {
  text: string,
  style?: Object
}

function AppText(props: props) {
  return <Text style={[styles.text, props.style]}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    backgroundColor: "white"
  },

});

export default AppText;
