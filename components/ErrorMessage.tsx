import { StyleSheet } from 'react-native'
import React from 'react'
import AppText from './AppText'

export default function ErrorMessage({ error, visible }: { error: string | undefined, visible: boolean | undefined }) {
  if (!visible || !error) return null;
  return (
    <AppText style={styles.error} text={error} />
  )
}

const styles = StyleSheet.create({
  error: {
    color: "red"
  }
})