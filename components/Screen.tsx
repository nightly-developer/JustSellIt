import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import Constants from 'expo-constants'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface props{
  children: ReactNode,
  style?: Object,
}

function Screen (props:props)  {
  return(
    <GestureHandlerRootView>
      <SafeAreaView style={styles.screen}>
        <View style={props?.style}>
          {props.children}
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    // flex: 1,
  },
});