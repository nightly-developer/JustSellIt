import { StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { Formik } from 'formik'

import { ValidationSchemaType } from '@/app/screens/LoginScreen'


interface props {
  initialValues: { [key: string]: string },
  validationSchema: ValidationSchemaType,
  children: ReactNode,
  onSubmit: (obj: any) => void,
}

export default function AppForm(props: props) {
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      onSubmit={props.onSubmit}
    >
      {() => (
        <>
          {props.children}
        </>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({})