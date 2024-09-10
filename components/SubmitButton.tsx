import { StyleSheet} from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import AppButton from '@/components/AppButton'

export default function SubmitButton({title}:{title:string}) {
  const {handleSubmit} = useFormikContext()
  return (
    <AppButton title={title} onPress={handleSubmit} />
  )
}

const styles = StyleSheet.create({})