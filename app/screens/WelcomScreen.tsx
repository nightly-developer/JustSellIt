import React from "react"
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"

function WelcomScreen() {
  return (
    <ImageBackground
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
    <View style={styles.loginButton}></View>
    <View style={styles.registerButton}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65"
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
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4"
  },
  tagLine: {

  }
})

export default WelcomScreen
