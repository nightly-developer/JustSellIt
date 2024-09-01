import { View, StyleSheet, Image,ImageSourcePropType } from 'react-native'
import React from 'react'

import AppText from './AppText'
import colors from '../constants/Colors'

interface props{
  title: string,
  subtitle: string,
  imageSource: ImageSourcePropType,
}

export default function ListItem(props:props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.imageSource}/>
    <View>
        <AppText style={styles.title} text={props.title}></AppText>
        <AppText style={styles.subTitle} text={props.subtitle}></AppText>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 10,
    backgroundColor: "portalGreen"
  },
  title: {
    fontWeight: "500"
  },
  subTitle: {
    fontWeight: "500",
    color: colors.medium
  }
})