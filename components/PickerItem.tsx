import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppText from './AppText'

interface props {
  onPress: () => void,
  label: string,
}
const PickerItem = (props:props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <AppText style={styles.text} text={props.label} />
    </TouchableOpacity>
  )
}


export default PickerItem

const styles = StyleSheet.create({
  text: {
    padding: 20
  }
})