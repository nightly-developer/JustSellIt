import React from 'react'
import { StyleSheet, Platform, TextInput, View } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'

import { MaterialCommunityIconsName } from "@/components/Icon"
import defaultStyles from '@/constants/styles'
const Colors = defaultStyles.Colors

interface props{
  name: MaterialCommunityIconsName,
  otherProps: object
}

function AppTextInput(props:props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} {...props.otherProps} />
      {props.name &&
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={props.name} size={20} color={Colors.medium
          } />
        </View>}
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 10,
    marginHorizontal:20
  },
  textInput: {
    flexGrow: 1,
    ...defaultStyles.text
  },
  iconContainer: {
    paddingEnd:10
  }
})