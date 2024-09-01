import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import React, { ReactNode } from 'react'
import Constants from 'expo-constants'

interface props{
  children: ReactNode
}

function Screen (props:props)  {
  return(
    <SafeAreaView>
      <View>
        {props.children}
      </View>
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight
  }
})