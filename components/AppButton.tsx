import React from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import defaultStyles from '@/constants/styles'
const Colors = defaultStyles.Colors

interface props {
  title: string,
  onPress: () => void,
  color?: string // keyof typeof Colors,
}

function AppButton(props: props) {
  // props.onPress()
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: props?.color ?? Colors.primary }}
      onPress={props.onPress}
    >
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: "bold",
  }
})

export default AppButton;