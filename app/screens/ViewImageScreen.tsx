import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '@/constants/Colors';

function ViewImageScreen() {
  console.log("hello from viewimagescreen!!")
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color={"white"} size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' color={"white"} size={30} />
      </View>
      <Image style={styles.image} resizeMode='contain' source={require('../assets/images/chair.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%"
  }
})

export default ViewImageScreen;