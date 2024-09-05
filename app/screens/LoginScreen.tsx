import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import Screen from '@/components/Screen'
import AppTextInput from '@/components/AppTextInput'
import AppButton from '@/components/AppButton'
import defaultSytle from '@/constants/styles'
const Colors = defaultSytle.Colors

function LoginScreen (){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo-red.png")}
      />
      <AppTextInput
        iconName="email"
        otherProps={{
          autoCapitialize:"none",
          autoCorrect:false,
          keyboardType: "email-address",
          onChangeText: (text: string): void => setEmail(text),
          placeholder:"Email",
          textcontentType:"emailAddress"}}
      />
      <AppTextInput
        iconName="lock"
        otherProps={{
          autoCapitialize:"none",
          autoCorrect:false,
          placeholder:"Passwrod",
          textContentType: "password",
          onChangeText:(text: string): void => setPassword(text),
          secureTextEntry:true,
        }}
      />
      <AppButton onPress={() => console.log("email: "+email,"password: "+password)} title='Login'/>
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
    marginVertical: 20,
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
  },
})