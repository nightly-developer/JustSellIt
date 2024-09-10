import { Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'


import Screen from '@/components/Screen'
import AppForm from '@/components/AppForm';
import defaultSytle from '@/constants/styles'
import AppFormField from '@/components/AppFormField';
import SubmitButton from '@/components/SubmitButton';

const Colors = defaultSytle.Colors

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password")
})


export interface FormValues {
  email: string;
  password: string;
}

function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo-red.png")}
      />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name='email'
          iconName="email"
          otherProps={{
            autoCapitialize: "none",
            placeholder: "Email",
            keyboardType: "email-address",
            textcontentType: "emailAddress",
            autoCorrect: false,
          }}
        />
        <AppFormField
          name="password"
          iconName="lock"
          otherProps={{
            autoCapitialize: "none",
            placeholder: "Passwrod",
            textContentType: "password",
            autoCorrect: false,
            secureTextEntry: true,
          }}
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  )
}

export default LoginScreen
export type ValidationSchemaType = Yup.InferType<typeof validationSchema>;

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