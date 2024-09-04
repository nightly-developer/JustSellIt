import React from "react";
import { Text, StyleSheet } from "react-native";

import defaultStyles from '@/constants/styles'

interface props {
  text: string,
  style?: Object
}

function AppText(props: props) {
  return <Text style={[defaultStyles.text, props.style]}>{props.text}</Text>;
}

const styles = StyleSheet.create({});

export default AppText;
