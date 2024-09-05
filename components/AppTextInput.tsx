import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'

import { MaterialCommunityIconsName } from "@/components/Icon"
import defaultStyles from '@/constants/styles'
const Colors = defaultStyles.Colors

interface props{
  iconName: MaterialCommunityIconsName,
  otherProps?: object
}

function AppTextInput(props:props) {
  return (
    <View style={styles.container}>
      {props.iconName &&
        <MaterialCommunityIcons
          style={styles.icon}
          name={props.iconName}
          size={20}
          color={Colors.medium}
        />}
      <TextInput style={styles.textInput} {...props.otherProps} />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    marginHorizontal:20
  },
  textInput: {
    flex: 1,
  },
  icon: {
    paddingRight: 10,
  }
})