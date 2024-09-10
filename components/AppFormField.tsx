import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import AppTextInput from '@/components/AppTextInput'
import ErrorMessage from '@/components/ErrorMessage'
import {FormValues} from '@/app/screens/LoginScreen'
import { MaterialCommunityIconsName } from '@/components/Icon'

interface props{
  name: keyof FormValues,
  iconName: MaterialCommunityIconsName,
  otherProps: object
}

export default function AppFormField(props:props) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext<FormValues>()
  
  const {name, iconName, otherProps} = props

  return (
    <>
      <AppTextInput 
        iconName={iconName}
        otherProps={{
          onChangeText: handleChange(name),
          onBlur:() => setFieldTouched(name),
          ...otherProps}}
        />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({})