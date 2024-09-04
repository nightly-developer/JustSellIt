import React from "react"
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"

import AppButton from '@/components/AppButton';

function WelcomScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/images/background.jpg")}
    >
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo-red.png")}
      />
      <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonscontainer}>
        <AppButton onPress={() => console.log("you pressed a login button")} title='Login' color="primary"/>
        <AppButton onPress={() => console.log("you pressed a Sign Up button")} title='Sign Up' color="secondary"/>  
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonscontainer: {
    padding: 20,
    width: "100%"
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20
  }
})

export default WelcomScreen
