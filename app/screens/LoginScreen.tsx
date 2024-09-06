import { Image, StyleSheet } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup'

import Screen from '@/components/Screen'
import AppTextInput from '@/components/AppTextInput'
import AppButton from '@/components/AppButton'
import defaultSytle from '@/constants/styles'
import AppText from '@/components/AppText';
import ErrorMessage from '@/components/ErrorMessage';
const Colors = defaultSytle.Colors

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password")
})

function LoginScreen (){
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo-red.png")}
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              iconName="email"
              otherProps={{
                autoCapitialize:"none",
                autoCorrect:false,
                keyboardType: "email-address",
                onChangeText: handleChange("email"),
                placeholder:"Email",
                textcontentType:"emailAddress"}}
            />
            <ErrorMessage error={errors.email} />
            
            <AppTextInput
              iconName="lock"
              otherProps={{
                autoCapitialize:"none",
                autoCorrect:false,
                placeholder:"Passwrod",
                textContentType: "password",
                onChangeText:handleChange("password"),
                secureTextEntry:true,
              }}
            />
            <ErrorMessage error={errors.password?.toString()} />
            
            <AppButton onPress={handleSubmit} title='Login'/>
          </>
        )}
      </Formik>
      
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